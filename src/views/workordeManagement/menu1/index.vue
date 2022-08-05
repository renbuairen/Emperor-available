<template>
  <div>
    <div class="boxTitle">
      <el-card class="box-card" shadow="never">
        <el-row type="flex">
          <el-col :span="8"
            ><div class="inputBox">
              <span class="spanTxt">工单编号:</span
              ><el-input
                size="small"
                v-model="input"
                placeholder="请输入"
              ></el-input></div
          ></el-col>

          <el-col :span="9"
            ><div class="inputBox">
              <span class="spanTxt" style="margin: 0 -10px 0 10px"
                >工单状态:</span
              ><el-select
                v-model="select"
                slot="prepend"
                placeholder="请选择"
                size="small"
              >
                <el-option label="待办" value="1"></el-option>
                <el-option label="进行" value="2"></el-option>
                <el-option label="取消" value="3"></el-option>
                <el-option label="完成" value="4"></el-option>
              </el-select></div
          ></el-col>
          <div style="margin-left: -26px">
            <el-button type="primary" icon="el-icon-search" size="small"
              >查询</el-button
            >
          </div>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',
    }
  },

  created() {},

  methods: {},
}
</script>

<style scoped lang="scss">
.boxTitle {
  .inputBox {
    display: flex;

    .spanTxt {
      width: 80px;
      font-size: 14px;
      line-height: 32px;
      margin-right: 6px;
    }
  }
  .el-button--primary {
    background-color: #5f84ff;
  }
}
</style>
