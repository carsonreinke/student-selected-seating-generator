<template>
  <div
    :class="{'desk': true, 'active': isDragging, 'editable': isEditable}"
    :style="{ left: desk.position.x + 'px', top: desk.position.y + 'px', transform: 'rotate(' +  desk.position.angle + 'deg)' }"
    @mousedown="onDragStart"
    @touchstart="onDragStart"
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

/**
 * Return the coordinates
 */
const eventCoordinates = (event, touchList = "touches") => {
  if (event[touchList]) {
    return { x: event[touchList][0].clientX, y: event[touchList][0].clientY };
  } else {
    return { x: event.clientX, y: event.clientY };
  }
};

export default {
  name: "desk",
  props: {
    desk: Object,
    editable: Boolean,
  },
  computed: {
    isEditable() {
      return this.editable;
    },
    isRotating() {
      return this.rotating !== null;
    },
    isDragging() {
      return this.dragging !== null;
    },
  },
  data: () => {
    return {
      dragging: null,
      rotating: null,
    };
  },
  methods: {
    ...mapActions(["moveDesk", "removeDesk", "rotateDesk"]),
    name() {
      const { desk } = this;
      return desk.student === null ? "Student" : desk.student.name;
    },
    onDragStart(event) {
      const element = event.target;

      this.dragging = {
        x: element.offsetLeft,
        y: element.offsetTop,
        client: eventCoordinates(event),
        events: {
          move: this.onDrag.bind(this),
          up: this.onDragEnd.bind(this),
        },
        parentRect: element.parentElement?.getBoundingClientRect(),
        elementRect: element.getBoundingClientRect(),
      };

      //Add listeners to entire document
      document.body.addEventListener("mousemove", this.dragging.events.move);
      document.body.addEventListener("mouseup", this.dragging.events.up);
      document.body.addEventListener("touchmove", this.dragging.events.move);
      document.body.addEventListener("touchend", this.dragging.events.up);
    },
    onDrag(event) {
      this.onDragEnd(event, false);
    },
    onDragEnd(event, final = true) {
      const { desk } = this;

      //Check if we have a starting position or not, if not, just exit
      if (!this.dragging) {
        return;
      }

      const clientCoordinates = eventCoordinates(event, "changedTouches");
      const _dragging = Object.assign({}, this.dragging);

      //Calculate new position
      let x = clientCoordinates.x - this.dragging.client.x + this.dragging.x,
        y = clientCoordinates.y - this.dragging.client.y + this.dragging.y;

      //Ensure position not too far left/top
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }

      //Ensure position not too far bottom/right
      if (this.dragging.parentRect) {
        if (x > this.dragging.parentRect.width - this.dragging.elementRect.width) {
          x = this.dragging.parentRect.width - this.dragging.elementRect.width;
        }
        if (y > this.dragging.parentRect.height - this.dragging.elementRect.height) {
          y = this.dragging.parentRect.height - this.dragging.elementRect.height;
        }
      }

      this.moveDesk({ desk, x, y });

      if (final) {
        //Remove listeners
        document.body.removeEventListener(
          "mousemove",
          this.dragging.events.move
        );
        document.body.removeEventListener("mouseup", this.dragging.events.up);
        document.body.removeEventListener(
          "touchmove",
          this.dragging.events.move
        );
        document.body.removeEventListener("touchend", this.dragging.events.up);

        //Reset object
        this.dragging = null;
      } else {
        //Apply latest position
        _dragging.client = clientCoordinates;
        _dragging.x = x;
        _dragging.y = y;
        this.dragging = _dragging;
      }
    },
    onRotateStart(event) {
      //Concept copied from https://bl.ocks.org/joyrexus/7207044
      const { desk } = this,
        element = event.target,
        rect = element.parentElement.parentElement.getBoundingClientRect();

      const clientCoordinates = eventCoordinates(event);
      const clientX = clientCoordinates.x,
        clientY = clientCoordinates.y;

      event.preventDefault();
      event.stopPropagation();

      //Setup object of data used for rotating
      this.rotating = {
        angle: desk.position.angle,
        rotation: 0.0,
        start: 0.0,
        events: {
          move: this.onRotate.bind(this),
          up: this.onRotateEnd.bind(this),
        },
        center: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        },
      };

      const x = clientX - this.rotating.center.x,
        y = clientY - this.rotating.center.y;
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
          angle: this.rotating.angle + this.rotating.rotation,
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

      const clientCoordinates = eventCoordinates(event, "changedTouches");
      const clientX = clientCoordinates.x,
        clientY = clientCoordinates.y;

      event.preventDefault();
      event.stopPropagation();

      if (this.rotating) {
        //Apply latest rotation
        (x = clientX - this.rotating.center.x),
          (y = clientY - this.rotating.center.y),
          (d = RADIANS_TO_DEGREES * Math.atan2(y, x));
        this.rotating.rotation = d - this.rotating.start;
        this.rotateDesk({
          desk,
          angle: this.rotating.angle + this.rotating.rotation,
        });
      }
    },
  },
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
  touch-action: none;
}

.editable {
  user-select: none;
}

.desk.editable {
  cursor: grab;
}

.desk.editable.active {
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
  touch-action: auto;
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
  touch-action: auto;
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
</style>
