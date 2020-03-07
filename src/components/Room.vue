<template>
  <div id="room">
    <h2
      class="name"
      :contenteditable="isEditable"
      v-text="name"
      @blur="onBlur"
      @keydown.enter="onKeyDown"
    ></h2>
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
  left: 0;
  top: 0;
  margin-left: 200px;
  width: calc(100% - 200px);
  height: 100%;
  position: absolute;
}

#room .name {
  text-align: center;
}

@media print {
  #room {
    margin: 0;
    width: 100%;
  }
}
</style>