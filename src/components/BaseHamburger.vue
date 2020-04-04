<template>
  <a class="hamburger" @click="toggle">
    <span></span>
  </a>
</template>

<script>
export default {
  methods: {
    toggle: event => {
      const element = document.getElementById("app");

      if (element.classList.contains("expanded")) {
        element.classList.remove("expanded");
      } else {
        element.classList.add("expanded");
      }
    }
  }
};
</script>
