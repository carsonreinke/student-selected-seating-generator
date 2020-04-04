<template>
  <div id="container">
    <BaseHamburger />
    <nav class="pure-menu">
      <BaseHeader />
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="previous">
          <img src="../assets/images/back.svg" alt="Previous" /> Previous
        </li>
        <li class="pure-menu-item pure-menu-link" @click="startOver">
          <img src="../assets/images/start-over.svg" alt="Start Over" /> Start Over
        </li>
        <li class="pure-menu-item pure-menu-link" @click="print">
          <img src="../assets/images/print.svg" alt="Print" /> Print
        </li>
        <li class="pure-menu-item pure-menu-link" @click="save">
          <img src="../assets/images/save.svg" alt="Save" /> Save
        </li>
      </ul>
    </nav>
    <main>
      <Room />
    </main>
  </div>
</template>

<script>
import Room from "@/components/Room";
import BaseHamburger from "@/components/BaseHamburger.vue";
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "report",
  components: {
    Room,
    BaseHamburger,
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
      this.$store.dispatch("saveVersion").then(() => {
        window.alert("Room has been saved");
      });
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