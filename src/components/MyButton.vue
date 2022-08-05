<template>
  <el-button type="primary" :icon="iconType" :style="colorType" size="medium">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'MyButton',
  data() {
    return {
      colorType: {},
      iconType: '',
    }
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },

  created() {
    this.colorFn()
  },

  methods: {
    colorFn() {
      this.$set(this.colorType, 'border', 'none')
      if (this.type === 'search') {
        this.$set(this.colorType, 'background', '#5f84ff')
        this.iconType = 'el-icon-search'
      } else if (this.type === 'add') {
        this.$set(
          this.colorType,
          'background',
          'linear-gradient(135deg, #ff9743, #ff5e20)'
        )
        this.iconType = 'el-icon-circle-plus-outline'
      } else if (this.type === 'config') {
        this.$set(this.colorType, 'background', '#fbf4f0')
        this.$set(this.colorType, 'color', '#000')
      } else if (this.type === 'page') {
        this.$set(this.colorType, 'background', '#d5ddf8')
        this.$set(this.colorType, 'color', '#000')
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
