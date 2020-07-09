<template>
  <div class="sider" ref="sider">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-sider",
  props: {
    width: {
      type: String
    }
  },
  mounted() {
    this.$refs.sider.style.width = this.width;
  }
};
</script>
<style lang="scss" scoped>
.sider {
}
</style>