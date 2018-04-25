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
        <el-aside width="200px">
          <el-menu
            default-active="1"
          >
            <h5 style="text-align:center;padding:10px;margin:0 0 10px;background:rgba(167,186,205, .3)">这块后期根据页面不同所对应的菜单也有所调整</h5>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>CSSDEMO</span>
              </template>
              <el-menu-item-group>
                <template slot="title">CSSDEMO分组1</template>
                <el-menu-item index="1-1">CSSDEMO-FLEX-1</el-menu-item>
                <el-menu-item index="1-2">CSSDEMO-FLEX-2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="CSSDEMO分组2">
                <el-menu-item index="1-3">CSSDEMO-POSTION</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">CSSDEMO分组3</template>
                <el-menu-item index="1-4-1">CSSDEMO-CALC</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">JSDEMO</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
      <el-footer>
        <div>
          <span class="time"> © 2018</span> | <i class="el-icon-star-on" style="color:red"></i> | <span class="author">djkloop</span>
        </div>
        <div>
          欢迎访问本网站DEMODJKLOOP
        </div>
      </el-footer>
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
