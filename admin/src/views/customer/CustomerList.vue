<template>
  <div>
    <m-top-handle title="客户id" @onSearch="onSearch" content="创建客户" path="/customer/create/"></m-top-handle>
    <p>客户列表 {{items.length}}个</p>
    <el-table size="mini" :data="items" :header-cell-style="{transform: 'rotateZ(-18deg)'}">
      <el-table-column prop="new_name" label="客户头像">
        <template slot-scope="scope">
          <el-avatar shape="square" :size="50" :src="scope.row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="客户名称"></el-table-column>
      <el-table-column prop="new_name" label="客户最新名称"></el-table-column>
      <el-table-column prop="type" label="客户类型">
        <template slot-scope="scope">{{ scope.row.type==1?'用户':'公众号或其他账号'}}</template>
      </el-table-column>
      <el-table-column prop="gender" label="性别">
        <template slot-scope="scope">{{ scope.row.gender==0?'未知':(scope.row.gender==1?'男':'女')}}</template>
      </el-table-column>
      <el-table-column prop="subscribe" label="是否关注公众号"></el-table-column>
      <el-table-column prop="is_friend" label="朋友"></el-table-column>
      <el-table-column prop="from" label="来源">
        <template slot-scope="scope">{{ scope.row.from=='wechat'?'微信':'公众号'}}</template>
      </el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column prop="last_time" label="最后更新时间"></el-table-column>
      <el-table-column prop="openid" label="openId"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            icon="el-icon-edit"
            @click="$router.push(`/customer/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            @click="remove(scope.row._id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    onSearch(v){
      let params = {
        _id: v 
      }
      this.fetch(params)
    },
    async fetch(params={}) {
      const res = await this.$http.get("rest/customers",{params:params});
      console.log(res)
      this.items = []
    },
    remove(id) {
      this.$confirm("是否确定要删除这篇文章?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`rest/customers/${id}`);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.fetch();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fetch();
  },
};
</script>
