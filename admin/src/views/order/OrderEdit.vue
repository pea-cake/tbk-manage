<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}订单</h1>
    <el-form label-width="200px" @submit.native.prevent="save">
      <el-form-item label="所属客户">
        <el-select v-model="model.customer_id">
          <el-option
            v-for="item in customers"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否已发放补贴">
        <el-switch
          v-model="model.isSendFee"
          active-value="1"
          inactive-value="0"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="是否绑定客户">
        <el-switch
          v-model="model.is_bind"
          active-value="1"
          inactive-value="0"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="id">
        <el-input v-model="model.order_id"></el-input>
      </el-form-item>
      <el-form-item label="订单来源">
        <el-select v-model="model.from" placeholder="请选择">
          <el-option
            label="未知"
            value="">
          </el-option>
          <el-option
            label="微信"
            value="wechat">
          </el-option>
          <el-option
            label="公众号"
            value="mp">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="购买平台">
        <el-input v-model="model.platform"></el-input>
      </el-form-item>
      <el-form-item label="预估计全部佣金（元）">
        <el-input v-model="model.estimateFee"></el-input>
      </el-form-item>
      <el-form-item label="预估计客户佣金（元）">
        <el-input v-model="model.estimateCustomerFee"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
      <el-form-item label="原始订单详情数据">
        {{model.order_detail}}
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
export default {
  name: "Create",
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      customers: [],
      body: "",
      customer_name:''
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/orders/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/orders", this.model);
      }
      this.$router.push("/order/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/orders/${this.id}`);
      this.model = res.data;
    },
    async fetchCustomers() {
      const res = await this.$http.get("rest/customers");
      console.log(typeof res.data[0]._id)
      this.customers = res.data;
    }
  },
  async created() {
    await this.fetchCustomers();
    this.id && await this.fetch();
  }
};
</script>
