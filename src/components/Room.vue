<template>
  <div id="room">
    <div class="name">
    <h2
      :contenteditable="isEditable"
      v-text="name"
      @blur="onBlur"
      @keydown.enter="onKeyDown"
    ></h2>
    </div>
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

#room div.name {
  text-align: center;
}

#room div.name h2 {
  display: inline-block;
}

#room div.name h2[contenteditable="true"] {
  background-image: url('../assets/images/edit.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  padding-right: 30px;
  margin-right: 0;
}

#room div.name h2[contenteditable="true"]:focus {
  background-image: none;
  padding-right: 0;
  margin-right: 30px;
}

@media print {
  #room {
    margin: 0;
    width: 100%;
  }
}
</style>