<template>
  <main>
    <ol>
      <li @click="newVersion">New</li>
      <li v-for="version in versions" :key="version.id" @click="loadVersion(version)">{{ version.name }} {{ version.createdAtDate().toLocaleString() }}</li>
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
    loadVersion(version) {
      this.$store.dispatch("loadVersion", version).then(() => {
        this.$router.push("desks");
      });
    }
  }
};
</script>