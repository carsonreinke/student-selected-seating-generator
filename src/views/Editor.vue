<template>
  <div id="container">
    <nav>
      <button @click="addDesk">Add Desk</button>
      <button @click="arrange">Arrange</button>
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <Room />
    </main>
  </div>
</template>

<script>
import Room from "@/components/Room";
import { mapActions } from "vuex";
const INITIAL_DESKS = 6;

export default {
  name: "editor",
  components: {
    Room
  },
  methods: {
    ...mapActions(["addDesk"]),
    initial() {
      if(this.$store.getters.deskCount > 0) {
        return;
      }

      Promise.all(
        [...Array(INITIAL_DESKS)].map(() => {
          return this.$store.dispatch('addDesk');
        })
      ).then(this.arrange);
    },
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
      if(maxColumns * maxRows < this.$store.getters.deskCount) {
        throw new Exception('Too many desks to arrange');
      }
      //Change columns/rows to match the number of items
      const columns = maxColumns,
        rows = Math.ceil(this.$store.getters.deskCount / maxColumns);

      //Calculate column/row size and center position
      const width = containerRect.width / columns,
        height = containerRect.height / rows;
      const left = width / 2.0 - deskRect.width / 2.0,
        top = height / 2.0 - deskRect.height / 2.0;
      
      //Place each desk under column/row
      this.$store.getters.allDesks.forEach((desk, index) => {
        const column = index % columns,
          row = Math.floor(index / columns);
        
        this.$store.dispatch('moveDesk', {
          desk,
          x: (column * width) + left,
          y: (row * height) + top
        });
      });
    }
  },
  created() {
    this.initial();
  }
};
</script>