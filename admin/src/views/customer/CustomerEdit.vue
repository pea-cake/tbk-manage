<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}用户</h1>
    <el-form label-width="200px" @submit.native.prevent="save">
      <el-form-item label="客户名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="客户最新名称">
        <el-input v-model="model.new_name"></el-input>
      </el-form-item>
      <el-form-item label="客户头像">
        <el-avatar shape="square" :size="50" :src="model.avatar"></el-avatar>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="model.gender" placeholder="请选择">
          <el-option
            label="未知"
            value="0">
          </el-option>
          <el-option
            label="男"
            value="1">
          </el-option>
          <el-option
            label="女"
            value="2">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否朋友">
        <el-input v-model="model.is_friend"></el-input>
      </el-form-item>
      <el-form-item label="省份">
        <el-input v-model="model.province"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="model.city"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="model.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/customers/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/customers", this.model);
      }
      this.$router.push("/customer/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/customers/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
