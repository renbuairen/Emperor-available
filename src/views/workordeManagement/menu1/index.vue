<template>
  <div>
    <div class="boxTitle">
      <el-card shadow="never" body-style="padding:15px">
        <el-row type="flex">
          <div class="inputBox">
            <span class="spanTxt">工单编号:</span
            ><el-input
              size="medium"
              name="workOrder"
              v-model="workOrderInput"
              placeholder="请输入"
            ></el-input>
          </div>

          <div class="inputBox">
            <span class="spanTxt" style="margin: 0 -10px 0 10px">工单状态:</span
            ><el-select
              v-model="select"
              slot="prepend"
              placeholder="请选择"
              size="medium"
              style="margin-right: 6px"
            >
              <el-option label="待办" value="1"></el-option>
              <el-option label="进行" value="2"></el-option>
              <el-option label="取消" value="3"></el-option>
              <el-option label="完成" value="4"></el-option>
            </el-select>
            <MyButton type="search">查询</MyButton>
          </div>
        </el-row>
      </el-card>
    </div>

    <div class="mainTitle">
      <el-card shadow="never">
        <MyButton type="add">新建</MyButton>
        <MyButton type="config">工单配置</MyButton>

        <el-table
          size="medium"
          :data="workList.currentPageRecords"
          highlight-current-row
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column type="index" label="序号" width="80">
          </el-table-column>
          <el-table-column property="taskCode" label="工单编号" width="190">
          </el-table-column>
          <el-table-column property="innerCode" label="设备编号" width="190">
          </el-table-column>
          <el-table-column
            property="taskType.typeName"
            label="工单类型"
            width="190"
          >
          </el-table-column>
          <el-table-column property="createType" label="工单方式" width="190">
          </el-table-column>
          <el-table-column property="taskStatus" label="工单状态" width="190">
          </el-table-column>
          <el-table-column property="userName" label="运营人员" width="190">
          </el-table-column>
          <el-table-column property="createTime" label="创建日期" width="190">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <span style="color: #4368e1; cursor: pointer">查看详情</span>
          </el-table-column>
        </el-table>
        <div class="bottom">
          <p>
            共{{ workList.totalCount }}条记录 第 {{ page }}/{{
              workList.totalPage
            }}
            页
          </p>
          <div>
            <MyButton type="page" @click.native="addPageFn">上一页</MyButton>
            <MyButton type="page" @click.native="delPageFn">下一页</MyButton>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import { mapState } from 'vuex'
export default {
  name: 'workordeManagement-1',
  data() {
    return {
      workOrderInput: '',
      select: '',
      page: 1,
    }
  },
  components: {
    MyButton,
  },

  created() {
    this.getWorkListApi()
  },

  methods: {
    async getWorkListApi() {
      await this.$store.dispatch('work/setWorkList')
      await this.$store.dispatch('work/setWorkStatus')
      await this.$store.dispatch('work/setWorkType')
    },
    addPageFn() {
      if (this.page > 1) {
        this.page--
      }
    },
    delPageFn() {
      this.page++
    },
  },
  computed: {
    ...mapState('work', ['workList']),
  },
}
</script>

<style scoped lang="scss">
.boxTitle {
  margin-bottom: 20px;
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
    margin-left: 10px;
  }
}
.mainTitle {
  .bottom {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #dbdfe5;
    }
  }
}
</style>
