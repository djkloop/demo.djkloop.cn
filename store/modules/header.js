import * as types from './types'
const headerStore = {
  state: {
    selectMenu: "",
    topMenu: ""
  },
  mutations: {
    [types.SELECTMENU]:(state, key) => {
      state.selectMenu = key;
      state.topMenu = state.selectMenu;
    }
  },
  actions: {
    selectMenuActions: function({commit, state}, key) {
      /*
        点击li的时候要获取到下面的a标签的href属性然后手动跳转
        点击a的时候就不用管了
        这里因为改变了float所以坐标是反的
      */
      if(key !== '') {
        var liLength = document.querySelectorAll('.d-top-menu .el-menu-item').length;
        var isActiveLi = document.querySelectorAll('.d-top-menu .el-menu-item')[liLength-key];
        var isAsrc = isActiveLi.querySelector('a').getAttribute('href');
        this.$router.push({
          path: isAsrc
        })
      }
      commit(types.SELECTMENU, key);
    }
  }
}

export default headerStore;