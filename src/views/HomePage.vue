<template>
  <div>
    <h1 @click="handleClick">Home Page</h1>
    <p>{{ myName }}</p>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useStore } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state).name;
    const handleClick = () => {
      // store.commit("changeName", "hello");
      store.dispatch("changeName", "hello");//异步
    };
    return {
      name,
      handleClick,
    };
  },

  components: {},

  computed: {
    myName() {
      return this.$store.state.name;
    },
  },

  methods: {},
};
</script>
<style scoped></style>
