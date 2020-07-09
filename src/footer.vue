<template>
  <div class="footer" ref="footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-footer",
  props: {
    height: {
      type: String
    }
  },
  mounted() {
    this.$refs.footer.style.height = this.height;
  }
};
</script>
<style lang="scss" scoped>
.footer {
}
</style>