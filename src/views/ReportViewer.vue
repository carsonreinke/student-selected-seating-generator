<template>
  <div id="container">
    <nav>
      <button @click="previous">Previous</button>
      <button @click="print">Print</button>
      <button @click="save">Save</button>
    </nav>
    <main>
      <Room />
    </main>
  </div>
</template>

<script>
import Room from "@/components/Room";

export default {
  name: "report",
  components: {
    Room
  },
  methods: {
    previous() {
      this.$router.push("students");
    },
    print() {
      //TODO
    },
    save() {
      //TODO
    }
  },
  created() {
    if (this.$store.getters.isEmpty) {
      this.$router.push("desks");
    }

    this.$store.dispatch("arrange");
  }
};
</script>