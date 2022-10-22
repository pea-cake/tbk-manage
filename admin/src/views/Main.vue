<template>
  <div>
    <el-row class="header">
      <el-col>
        <span>{{ username }}</span>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-left: 10px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a @click="logout">退出</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <div class="blank"></div>
    <el-row class="main">
      <el-col class="lsider" :xs="8" :sm="6" :md="4" :lg="2" :xl="2">
        <el-menu style="width: 100%;" router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>tbk管理
            </template>
            <el-menu-item-group>
              <template slot="title">客户</template>
              <el-menu-item index="/customer/create">新建客户</el-menu-item>
              <el-menu-item index="/customer/list">客户列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">订单</template>
              <el-menu-item index="/order/create">新建订单</el-menu-item>
              <el-menu-item index="/order/list">订单列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">转链</template>
              <el-menu-item index="/turn_link/create">新建转链</el-menu-item>
              <el-menu-item index="/turn_link/list">转链列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>系统设置
            </template>
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
              <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="content" :xs="16" :sm="18" :md="20" :lg="22" :xl="22">
        <router-view :key="$route.path"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #69a8e7;
  color: #333;
  height: 60px;
  line-height: 60px;
  z-index: 2;
  text-align: right;
}
.blank{
  height: 60px;
}
.main{
  height: 100vh;
  overflow: scroll;
}
.content{
  padding: 8px;
}
.lsider {
  color: #333;
}
</style>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  created() {
    this.username = localStorage.getItem("username") || "";
  }
};
</script>
