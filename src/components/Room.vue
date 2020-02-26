<template>
  <div id="room">
    <div
      class="name"
      :contenteditable="isEditable"
      v-text="name"
      @blur="onBlur"
      @keydown.enter="onKeyDown"
    ></div>
    <Desk v-for="desk in allDesks" :key="desk.id" :desk="desk" :editable="isEditable" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Desk from "@/components/Desk.vue";

export default {
  name: "Room",
  props: {
    editable: Boolean
  },
  components: {
    Desk
  },
  computed: {
    ...mapGetters(["allDesks", "name"]),
    isEditable() {
      return this.editable;
    }
  },
  methods: {
    ...mapActions(["editName"]),
    onBlur(event) {
      this.editName(event.target.innerText);
    },
    onKeyDown(event) {
      event.preventDefault();
      event.target.blur();
    }
  }
};
</script>

<style scoped>
#room {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 3rem);
  height: 100%;
  margin-left: 3rem;
}

#room .name {
  text-align: center;
}
</style>