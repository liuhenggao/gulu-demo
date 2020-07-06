<template>
  <div class="row" :style="colStyle" :class="aligns&&`align-${aligns}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-row",
  props: {
    gutter: {
      type: [String, Number]
    },
    aligns: {
      type: String,
      validator(value) {
        return ["left", "center", "right"].includes(value);
      }
    }
  },
  mounted() {
    if (this.gutter) {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      });
    }
  },
  computed: {
    colStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;

  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>