<template>
  <div
    class="desk"
    :draggable="isEditable"
    :style="{ left: desk.position.x + 'px', top: desk.position.y + 'px', transform: 'rotate(' +  desk.position.angle + 'deg)' }"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @touchstart="onDragStart"
    @touchend="onDragEnd"
  >
    <img alt="Drag Me" src="../assets/images/drag.svg" v-if="isEditable" />
    <!-- <img alt="Desk" src="../assets/images/desk.svg" /> -->
    <div class="name">{{ name() }}</div>
    <img alt="Delete" src="../assets/images/delete.svg" @click="removeDesk(desk)" v-if="isEditable" />
    <img
      alt="Rotate Me"
      src="../assets/images/rotate.svg"
      @mousedown="onRotateStart"
      @touchstart="onRotateStart"
      v-if="isEditable"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

const RADIANS_TO_DEGREES = 180.0 / Math.PI;

export default {
  name: "desk",
  props: {
    desk: Object,
    editable: Boolean
  },
  computed: {
    isEditable() {
      return this.editable;
    }
  },
  data: () => {
    return {
      initialPosition: {},
      rotating: null
    };
  },
  methods: {
    ...mapActions(["moveDesk", "removeDesk", "rotateDesk"]),
    name() {
      const { desk } = this;
      return desk.student === null ? "Desk" : desk.student.name;
    },
    onDragStart(event) {
      this.initialPosition = { x: event.clientX, y: event.clientY };
    },
    onDragEnd(event) {
      const { desk } = this;
      const element = event.target;

      //Calculate new position
      let x = event.clientX - this.initialPosition.x + element.offsetLeft,
        y = event.clientY - this.initialPosition.y + element.offsetTop;

      //Ensure position not too far left/top
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }

      //Ensure position not too far bottom/right
      const parentElement = element.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect(),
          elementRect = element.getBoundingClientRect();

        if (x > parentRect.width - elementRect.width) {
          x = parentRect.width - elementRect.width;
        }
        if (y > parentRect.height - elementRect.height) {
          y = parentRect.height - elementRect.height;
        }
      }

      this.moveDesk({ desk, x, y });
    },
    onRotateStart(event) {
      //Concept copied from https://bl.ocks.org/joyrexus/7207044
      const { desk } = this,
        element = event.target,
        rect = element.parentElement.getBoundingClientRect();

      event.preventDefault();
      event.stopPropagation();

      //Setup object of data used for rotating
      this.rotating = {
        angle: desk.position.angle,
        rotation: 0.0,
        start: 0.0,
        events: {
          move: this.onRotate.bind(this),
          up: this.onRotateEnd.bind(this)
        },
        center: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        }
      };

      const x = event.clientX - this.rotating.center.x,
        y = event.clientY - this.rotating.center.y;
      this.rotating.start = RADIANS_TO_DEGREES * Math.atan2(y, x);

      //Add listeners to entire document
      document.body.addEventListener("mousemove", this.rotating.events.move);
      document.body.addEventListener("mouseup", this.rotating.events.up);
      document.body.addEventListener("touchmove", this.rotating.events.move);
      document.body.addEventListener("touchend", this.rotating.events.up);
    },
    onRotateEnd(event) {
      const { desk } = this;

      if (this.rotating) {
        //Finish rotating
        this.rotateDesk({
          desk,
          angle: this.rotating.angle + this.rotating.rotation
        });

        //Remove listeners
        document.body.removeEventListener(
          "mousemove",
          this.rotating.events.move
        );
        document.body.removeEventListener("mouseup", this.rotating.events.up);
        document.body.removeEventListener(
          "touchmove",
          this.rotating.events.move
        );
        document.body.removeEventListener("touchend", this.rotating.events.up);

        //Reset object
        this.rotating = null;
      }
    },
    onRotate(event) {
      const { desk } = this;
      let d, x, y;

      event.preventDefault();
      event.stopPropagation();

      if (this.rotating) {
        event.preventDefault();

        //Apply latest rotation
        (x = event.clientX - this.rotating.center.x),
          (y = event.clientY - this.rotating.center.y),
          (d = RADIANS_TO_DEGREES * Math.atan2(y, x));
        this.rotating.rotation = d - this.rotating.start;
        this.rotateDesk({
          desk,
          angle: this.rotating.angle + this.rotating.rotation
        });
      }
    }
  }
};
</script>

<style scoped>
.desk {
  position: absolute;
  padding: 0.5rem;
  border: 1px solid black;
  background: white;
}

.desk > img {
  width: 5rem;
}

.desk * {
  pointer-events: none;
}

.desk > img {
  pointer-events: auto;
}

.desk[draggable="true"] {
  cursor: move;
}
</style>