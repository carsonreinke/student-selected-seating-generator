<template>
  <div
    :class="{'desk': true, 'active': isDragging}"
    :draggable="isEditable"
    :style="{ left: desk.position.x + 'px', top: desk.position.y + 'px', transform: 'rotate(' +  desk.position.angle + 'deg)' }"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @touchstart="onDragStart"
    @touchend="onDragEnd"
  >
    <div class="icon">
      <img alt src="../assets/images/desk.svg" />
    </div>
    <div class="container">
      <div class="drag-handle">
        <img alt="Drag Me" src="../assets/images/drag.svg" v-if="isEditable" />
      </div>
      <div class="delete-handle">
        <img
          alt="Delete"
          src="../assets/images/delete.svg"
          @click="removeDesk(desk)"
          v-if="isEditable"
        />
      </div>
      <!-- <img alt="Desk" src="../assets/images/desk.svg" /> -->
      <div class="name">{{ name() }}</div>

      <div :class="{ 'rotate-handle': true, 'active': isRotating }">
        <img
          alt="Rotate Me"
          src="../assets/images/rotate.svg"
          @mousedown="onRotateStart"
          @touchstart="onRotateStart"
          v-if="isEditable"
        />
      </div>
      <div class="clear"></div>
    </div>
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
    },
    isRotating() {
      return this.rotating !== null;
    },
    isDragging() {
      return this.initialPosition !== null;
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
      return desk.student === null ? "Student" : desk.student.name;
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

      //Reset object
      this.initialPosition = null;
    },
    onRotateStart(event) {
      //Concept copied from https://bl.ocks.org/joyrexus/7207044
      const { desk } = this,
        element = event.target,
        rect = element.parentElement.parentElement.getBoundingClientRect();

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
  width: 9em;
}

.icon {
  text-align: center;
}

.icon > img {
  vertical-align: bottom;
  text-align: center;
  width: 50%;
}

.container {
  position: relative;
  border: 2px solid black;
  background-color: #ffffff;
}

.desk * {
  pointer-events: none;
}

.desk[draggable="true"] {
  cursor: grab;
}

.desk[draggable="true"].active {
  cursor: grabbing;
}

.desk .drag-handle {
  float: left;
  width: 22px;
  height: 22px;
}

.desk .drag-handle > img {
  display: none;
}

.desk:hover .drag-handle > img {
  display: block;
}

.delete-handle {
  float: right;
  width: 22px;
  height: 22px;
}

.delete-handle > img {
  display: none;
  pointer-events: auto;
  cursor: pointer;
}

.desk:hover .delete-handle > img {
  display: block;
}

.name {
  clear: both;
  text-align: center;
  padding: 1rem 2rem;
}

.desk .rotate-handle {
  float: right;
  width: 22px;
  height: 22px;
}

.desk .rotate-handle > img {
  display: none;
  pointer-events: auto;
}

.desk:hover .rotate-handle > img,
.rotate-handle.active > img {
  display: block;
}

.clear {
  clear: both;
}

@media screen {
  .container {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  .container:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
}

@media print {
  .desk {
  }
}
</style>