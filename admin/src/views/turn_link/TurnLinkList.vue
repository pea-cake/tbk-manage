<template>
  <div>
    <m-top-handle
      title="客户id"
      @onSearch="onSearch"
      content="新增转链"
      path="/turnlinks/create/"
    ></m-top-handle>
    <p>转链列表{{items.length}}个</p>
    <el-table :data="items">
      <el-table-column prop="customer_id" label="客户id"></el-table-column>
      <el-table-column prop="customer_name" label="客户名"></el-table-column>
      <el-table-column prop="create_time" label="创建时间">
      </el-table-column>
      <el-table-column prop="origin_url" label="原链接内容">
        <template slot-scope="scope">
          <el-popover
            placement="top-center"
            trigger="hover"
            :content="scope.row.origin_url">
            <span slot="reference">{{scope.row.origin_url&&scope.row.origin_url.length>20?scope.row.origin_url.slice(0,20):scope.row.origin_url}}</span>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="turn_content" label="转链接后内容">
        <template slot-scope="scope">
          <el-popover
            placement="top-center"
            trigger="hover"
            :content="scope.row.turn_content">
            <span slot="reference">{{scope.row.turn_content&&scope.row.turn_content.length>20?scope.row.turn_content.slice(0,20):scope.row.turn_content}}</span>
          </el-popover>
        </template>
        
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            icon="el-icon-edit"
            @click="$router.push(`/turnlinks/edit/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            @click="remove(scope.row._id)"
            >删除</el-button
          >
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
      let params = null
      if(v){
        params = {
          customer_id: v.trim()
        }
      }else{
        params = {}
      }
      this.fetch(params)
    },
    async fetch(params={}) {
      const res = await this.$http.get("rest/turnlinks",{params:params});
      this.items = res.data;
    },
    remove(id) {
      this.$confirm("是否确定要删除这条转链?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`rest/turnlinks/${id}`);
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
