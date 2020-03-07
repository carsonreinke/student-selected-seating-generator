<template>
  <div>
    <nav class="pure-menu">
      <BaseHeader />
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="newVersion">New</li>
        <li
          class="pure-menu-item pure-menu-link"
          v-for="version in versions"
          :key="version.id"
          @click="loadVersion(version)"
        >{{ version.name }} {{ version.createdAtDate().toLocaleString() }}</li>
      </ul>
    </nav>
    <main>
      <h2>Welcome</h2>
      <p>TODO</p>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "version-selector",
  components: {
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