<template>
  <Room />
</template>

<script>
import Room from "@/components/Room";

export default {
  name: "report",
  components: {
    Room
  },
  created() {
      if(this.$store.getters.isEmpty) {
          this.$router.push('desks');
      }
  }
};
</script>