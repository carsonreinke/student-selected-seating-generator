<template>
  <div id="container">
    <nav>
      <button @click="previous">Previous</button>
      <button @click="next">Next</button>
    </nav>
    <main>Hello</main>
  </div>
</template>

<script>
export default {
  name: "student-editor",
  methods: {
    previous() {
      this.$router.push('desks');
    },
    next() {
      this.$router.push('report');
    }
  }
};
</script>