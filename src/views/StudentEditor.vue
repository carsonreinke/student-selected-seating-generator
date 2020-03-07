<template>
  <div id="container">
    <nav class="pure-menu">
      <BaseHeader />
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="previous">Previous</li>
        <li class="pure-menu-item pure-menu-link" @click="next">Next</li>
      </ul>
    </nav>
    <main>
      <Student v-for="student in allStudents" :key="student.id" :student="student" />
    </main>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "student-editor",
  components: {
    Student,
    BaseHeader
  },
  computed: mapGetters(["allStudents"]),
  methods: {
    previous() {
      this.$router.push("desks");
    },
    next() {
      this.$router.push("report");
    }
  },
  created() {
    if (this.$store.getters.isEmpty) {
      this.$router.push("/");
    }

    this.$store.dispatch("normalize");
  }
};
</script>