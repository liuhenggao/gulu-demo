<template>
  <div class="content" ref="content">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-content",
  props: {
    height: String
  },
  mounted() {
    this.$refs.content.style.height = this.height;
  }
};
</script>
<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
</style>