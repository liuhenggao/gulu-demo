<template>
  <div class="header" ref="header">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-header",
  props: {
    height: {
      type: String
    }
  },
  mounted() {
    this.$refs.header.style.height = this.height;
  }
};
</script>
<style lang="scss" scoped>
.header {
}
</style>