<template>
  <div>
    <input v-model="inputValue" />
    <button @click="handleAddItem">提交</button>
  </div>
  <ul>
    <list-item v-for="(item, index) in list" :key="index" :msg="item" />
  </ul>
  <div><router-link to="/">Home</router-link></div>
  <div><router-link to="/about">About</router-link></div>
  <div><router-link to="/login">Login</router-link></div>
  <router-view></router-view>
</template>

<script>
import { reactive, ref } from "vue";
import ListItem from "./components/ListItem.vue";
export default {
  name: "App",
  components: {
    ListItem,
  },
  setup() {
    const inputValue = ref("");
    const list = reactive([]);
    const handleAddItem = () => {
      list.push(inputValue.value);
      inputValue.value = "";
    };
    return { inputValue, list, handleAddItem };
  },
};
</script>

<style>
button {
  margin-left: 20px;
}
</style>
