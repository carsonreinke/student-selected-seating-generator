<template>
  <div id="container">
    <nav>
      <button @click="previous">Previous</button>
      <button @click="next">Next</button>
    </nav>
    <main>
      <Student v-for="student in allStudents" :key="student.id" :student="student" />
    </main>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import { mapGetters } from "vuex";

export default {
  name: "student-editor",
  components: {
    Student
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
      this.$router.push("desks");
    }

    this.$store.dispatch("normalize");
  },
};
</script>