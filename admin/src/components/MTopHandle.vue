<template>
  <div>
    <el-row>
      <el-col class="top-box">
        <strong>{{title}}：</strong>
        <el-input class="search-input" :placeholder="`请输入${title}`" v-model="searchName"></el-input>
        <el-button @click="onSearch" type="primary">搜索</el-button>
        <slot>
          <el-button type="primary" class="fr" @click="$router.push(path)">{{content}}</el-button>
        </slot>
        <slot name="email"></slot>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "名称"
    },
    content: String,
    path: String,
  },
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    onSearch(){
      this.$emit('onSearch',this.searchName)
    }
  },
};
</script>

<style lang="scss" scoped>
.top-box {
  margin-bottom: 30px;
  .search-input {
    margin-right: 10px;
  }
}
</style>