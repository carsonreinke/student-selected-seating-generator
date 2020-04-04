<template>
  <div>
    <BaseHamburger />
    <nav class="pure-menu">
      <BaseHeader />
      <p>Let's get started!</p>
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link menu-new" @click="newVersion">
          <img src="../assets/images/add.svg" alt="New" /> New
        </li>
      </ul>
      <h3>Saved</h3>
      <ul class="pure-menu-list menu-bottom">
        <li
          class="pure-menu-item pure-menu-link"
          v-for="version in versions"
          :key="version.id"
          @click="loadVersion(version)"
        >{{ version.name }} Created On {{ version.createdAtDate().toLocaleString() }}</li>
      </ul>
    </nav>
    <main>
      <h2>Welcome</h2>
      <p>This a simple tool to help arrange students in a class room based on their own preferences for each other.  Students will be automatically selected for a particular desk based on proximity of their preferences.</p>
      <p>A note on <b>privacy</b>, this tool has no tracking/analytics and all data saved is on your local web browser.</p>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHamburger from "@/components/BaseHamburger.vue";
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "version-selector",
  components: {
    BaseHamburger,
    BaseHeader
  },
  computed: mapGetters(["versions"]),
  methods: {
    newVersion() {
      this.$store.dispatch("newVersion").then(() => {
        this.$router.push({ name: "desk-editor", props: { newVersion: true } });
      });
    },
    loadVersion(version) {
      this.$store.dispatch("loadVersion", version).then(() => {
        this.$router.push("desks");
      });
    }
  }
};
</script>
