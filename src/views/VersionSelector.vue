<template>
  <main>
    <ol>
      <li @click="newVersion">New</li>
      <li v-for="version in versions" :key="version" @click="loadVersion">{{ version }}</li>
    </ol>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "version-selector",
  computed: mapGetters(["versions"]),
  methods: {
    newVersion() {
      this.$store.dispatch("newVersion").then(() => {
        this.$router.push({name: "desk-editor", props: {newVersion: true}});
      });
    },
    loadVersion(event) {
      console.log(event);
      //this.$store.dispatch("loadVersion", version);
      //this.$router.push("desks");
    }
  }
};
</script>