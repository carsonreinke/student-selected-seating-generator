<template>
  <div id="container">
    <nav class="pure-menu">
      <BaseHeader />
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="previous">Previous</li>
        <li class="pure-menu-item pure-menu-link" @click="print">Print</li>
        <li class="pure-menu-item pure-menu-link" @click="save">Save</li>
        <li class="pure-menu-item pure-menu-link" @click="startOver">Start Over</li>
      </ul>
    </nav>
    <main>
      <Room />
    </main>
  </div>
</template>

<script>
import Room from "@/components/Room";
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "report",
  components: {
    Room,
    BaseHeader
  },
  methods: {
    previous() {
      this.$router.push("students");
    },
    print() {
      window.print();
    },
    save() {
      this.$store.dispatch("saveVersion");
    },
    startOver() {
      this.$router.push("/");
    }
  },
  created() {
    if (this.$store.getters.isEmpty) {
      this.$router.push("/");
    }

    this.$store.dispatch("arrange");
  }
};
</script>