<template>
  <div id="container">
    <nav class="pure-menu">
      <BaseHeader />
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="next">Next</li>
        <li class="pure-menu-item pure-menu-link" @click="addDesk">Add Desk</li>
        <li class="pure-menu-item pure-menu-link" @click="arrange">Arrange</li>
        
        <li class="pure-menu-item pure-menu-link" @click="startOver">Start Over</li>
      </ul>
    </nav>
    <main>
      <Room editable />
    </main>
  </div>
</template>

<script>
import Room from "@/components/Room";
import BaseHeader from "@/components/BaseHeader.vue";
import { mapActions } from "vuex";
const INITIAL_DESKS = 6;

export default {
  name: "desk-editor",
  components: {
    Room,
    BaseHeader
  },
  methods: {
    ...mapActions(["addDesk", "initialDesks"]),
    arrange() {
      let containerRect = document
          .getElementById("room")
          .getBoundingClientRect(),
        deskRect = document
          .getElementsByClassName("desk")[0]
          .getBoundingClientRect();
      if (!containerRect || containerRect.height == 0) {
        containerRect = { width: 1280, height: 960 };
      }
      if (!deskRect || deskRect.height == 0) {
        deskRect = { width: 50, height: 50 };
      }

      //Calculate number of columns/rows
      const maxColumns = Math.floor(containerRect.width / deskRect.width),
        maxRows = Math.floor(containerRect.height / deskRect.height);
      if (maxColumns * maxRows < this.$store.getters.deskCount) {
        throw new Error("Too many desks to arrange");
      }
      //Change columns/rows to match the number of items
      const columns = Math.floor(
        (maxColumns / (maxColumns + maxRows)) * this.$store.getters.deskCount
      );
      const rows = Math.ceil(
        (maxRows / (maxColumns + maxRows)) * this.$store.getters.deskCount
      );

      /*let columns = 1, rows = 1;
      while(columns * rows < this.$store.getters.deskCount) {
        columns++;
        rows++;
      }*/

      //const columns = maxColumns,
      //  rows = Math.ceil(this.$store.getters.deskCount / maxColumns);

      //Calculate column/row size and center position
      const width = containerRect.width / columns,
        height = containerRect.height / rows;
      const left = width / 2.0 - deskRect.width / 2.0,
        top = height / 2.0 - deskRect.height / 2.0;

      //Place each desk under column/row
      this.$store.getters.allDesks.forEach((desk, index) => {
        const column = index % columns,
          row = Math.floor(index / columns);

        this.$store.dispatch("moveDesk", {
          desk,
          x: column * width + left,
          y: row * height + top
        });
      });
    },
    next() {
      this.$router.push("students");
    },
    startOver() {
      this.$router.push("/");
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.getters.isEmpty) {
        vm.$router.push("/");
        return;
      }

      //New versions must be arranged, so this strangeness is delaying rendering to arrange
      if (vm.$store.getters.newVersion) {
        setTimeout(vm.arrange, 0);
        vm.$store.dispatch("newVersion", false);
      }
    });
  }
};
</script>