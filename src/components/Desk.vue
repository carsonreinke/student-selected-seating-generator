<template>
  <div
    class="desk"
    :draggable="isEditable"
    :style="{ left: desk.position.x + 'px', top: desk.position.y + 'px' }"
    @dragstart="onDragStart"
    @touchstart="onDragStart"
    @dragend="onDragEnd"
    @touchend="onDragEnd"
  >
    <img alt="Desk" src="../assets/desk.svg" />
    <div class="name">{{ name() }}</div>
    <button @click="removeDesk(desk)" v-if="editable">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "desk",
  props: {
    desk: Object,
    editable: Boolean,
  },
  computed: {
    isEditable() {
      return this.editable;
    }
  },
  data: () => {
    return {
      initialPosition: {}
    };
  },
  methods: {
    ...mapActions(["moveDesk", "removeDesk"]),
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

.desk > button {
  pointer-events: auto;
}

.desk[draggable="true"] {
  cursor: move;
}
</style>