<template>
  <div class="layout" :class="{hasSider}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "g-layout",
  data() {
    return {
      hasSider: false
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "g-sider") {
        this.hasSider = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.layout {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>