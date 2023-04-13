<template>
  <div>
    Home Page
    <p>{{ myName }}</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },

  components: {},

  computed: {
    myName() {
      console.log(this.$store.state.name);
      return this.$store.state.name;
    },
  },

  methods: {},
};
</script>
<style scoped></style>
