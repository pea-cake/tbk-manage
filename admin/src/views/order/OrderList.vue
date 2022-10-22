<template>
  <div>
    <m-top-handle
      title="客户id"
      @onSearch="onSearch"
      content="创建订单"
      path="/order/create/"
    ></m-top-handle>
    <p>订单列表 {{items.length}}个</p>
    <el-table :data="items">
      <el-table-column prop="order_id" label="订单id" ></el-table-column>
      <el-table-column prop="par" label="父级订单id" ></el-table-column>
      <el-table-column prop="customer_name" label="客户名" ></el-table-column>
      <el-table-column prop="is_bind" label="是否绑定" ></el-table-column>
      <el-table-column prop="customer_id" label="客户id" ></el-table-column>
      <el-table-column prop="goods_name" label="商品名" ></el-table-column>
      <el-table-column prop="goods_num" label="商品数量" ></el-table-column>
      <el-table-column prop="platform" label="电商平台"></el-table-column>
      <el-table-column prop="from" label="订单来源">
        <!-- <template scope="scope">
          {{ scope.row.createdAt | date("YYYY-MM-DD HH:mm:ss") }}
        </template> -->
      </el-table-column>
      <el-table-column prop="real" label="是否存订单"></el-table-column>
      <el-table-column prop="actualFee" label="最终全部佣金"></el-table-column>
      <el-table-column prop="subsidyFee" label="最终客户佣金"></el-table-column>
      <el-table-column prop="estimateCosPrice" label="有效订单金额"></el-table-column>
      <el-table-column prop="estimateFee" label="预估计全部佣金"></el-table-column>
      <el-table-column prop="estimateCustomerFee" label="预估计客户佣金"></el-table-column>
      <el-table-column prop="orderTime" label="付款时间"></el-table-column>
      <el-table-column prop="modifyTime" label="最后更新时间"></el-table-column>
      <el-table-column prop="finishTime" label="收货时间"></el-table-column>
      <el-table-column prop="isSendFee" label="是否发放补贴"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            icon="el-icon-edit"
            @click="$router.push(`/order/edit/${scope.row._id}`)"
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
      const res = await this.$http.get("rest/orders",{params:params});
      this.items = res.data;
    },
    remove(id) {
      this.$confirm("是否确定要删除这个订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`rest/orders/${id}`);
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
