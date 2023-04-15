import { createStore } from "vuex";
//VueX数据管理框架
//VueX  创建了一个全局的数据仓库，所有的组件都可以访问这个数据仓库
export default createStore({
  state: {
    name: "QzFrato",
  },
  //commit和mutations做关联
  mutations: {
    // mutations里面只允许写同步的代码，不允许写异步的代码
    //第四步 对应的mutation被执行
    setName(state,str) {
      //第五步 在mutation中修改state中的数据
      // console.log("mutations");
      state.name = str;
    },
    changeName(state,str){
        state.name = str;
    }
  },
  //dispatch和actions做关联
  actions: {
    //第二步，store感知到你触发了一个叫做setName的action，然后执行setName方法
    setName(store,str) {
      //第三步，提交一个commit触发一个mutation
      setTimeout(() => {
        store.commit("setName", str);
      }, 2000);
    },
    changeName(store,str){
        setTimeout(() => {
            store.commit("changeName", str);
          }, 2000);
    }
  },
  modules: {},
});
