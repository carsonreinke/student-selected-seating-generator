<template>
  <div id="container">
    <BaseHamburger />
    <nav class="pure-menu">
      <BaseHeader />
      <p>Provide the name of each student and their preferences.</p>
      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-link" @click="next">
          <img src="../assets/images/forward.svg" alt="Next" /> Next
        </li>
        <li class="pure-menu-item pure-menu-link" @click="previous">
          <img src="../assets/images/back.svg" alt="Previous" /> Previous
        </li>
        <li class="pure-menu-item pure-menu-link" @click="startOver">
          <img src="../assets/images/start-over.svg" alt="Start Over" /> Start Over
        </li>
      </ul>
    </nav>
    <main>
      <h2>Students</h2>
      <Student v-for="student in allStudents" :key="student.id" :student="student" />
    </main>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import BaseHamburger from "@/components/BaseHamburger.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import { mapGetters } from "vuex";

export default {
  name: "student-editor",
  components: {
    Student,
    BaseHamburger,
    BaseHeader
  },
  computed: mapGetters(["allStudents"]),
  methods: {
    previous() {
      this.$router.push("desks");
    },
    next() {
      this.$router.push("report");
    },
    startOver() {
      this.$router.push("/");
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
