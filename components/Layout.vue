<template>
  <div id="layout">
    <el-container>
      <el-header class="d-header">
        <el-row>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="grid-content d-logo">
              <nuxt-link to="/">
                <h1 @click="goIndex">DJKLOOP</h1>
              </nuxt-link>
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
            <div class="grid-content">
              <el-menu
                :default-active="topMenu"
                class="d-top-menu"
                mode="horizontal"
                @select="selectMenuActions"
                active-text-color="#409EFF">
                <el-menu-item index="4">博客资源相关声明</el-menu-item>
                <el-menu-item index="3">关于博客</el-menu-item>
                <el-menu-item index="2">我的DEMO</el-menu-item>
                <el-menu-item index="1">
                  <nuxt-link to="/demo">
                     我的博客
                  </nuxt-link>
                </el-menu-item>
              </el-menu>
            </div>
         </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.d-header {
  padding: 0;
}
</style>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed: {
    topMenu: {
      get: function () {
        return this.$store.state.headerStore.topMenu
      },
      set: function () {
      }
    },
    selectMenu: {
      get: function () {
        return this.$store.state.headerStore.selectMenu
      },
      set: function (v, vv) {
      }
    }
  },
  methods: {
    goIndex() {
      this.selectMenuActions('');
    },
    ...mapActions([
      'selectMenuActions'
    ])
  }
};
</script>
