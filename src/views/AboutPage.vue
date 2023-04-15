<template>
  <div>
    <h1 @click="handleClick">About Page</h1>
    <p>{{ myName }}</p>
  </div>
</template>

<script>
export default {
    name: "AboutPage",
  data() {
    return {};
  },

  components: {},

  computed: {
    myName() {
      return this.$store.state.name;
    },
  },

  methods: {
    handleClick() {
      //想改变数据，vuex要求第一步必须派发一个action
      //1. dispatch方法派发一个action
      //2.感知到setName这个action，执行store中actions下面的change方法
      //3. commit 提交一个叫做setName的数据变更
      //4. mutation 反知道提交的setName，执行store中的mutations下面的setName方法
      this.$store.dispatch("setName","你好");
      
      // this.$store.commit("setName");//直接提交一个mutation（只涉及同步修改，不考虑异步的情况下）
    },
  },
};
</script>
<style scoped></style>
