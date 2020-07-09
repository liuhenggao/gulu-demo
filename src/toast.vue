<template>
  <div class="toast" :class="toastPosition" ref="toast">
    <div v-html="$slots.default[0]" class="message"></div>
    <span v-if="autoClose===false" class="remove" @click="handleClose" ref="remove">
      <g-icon name="remove" class="icon-remove" v-if="iconOrtext"></g-icon>
      <span v-else class="icon-remove">{{closeButton.text}}</span>
    </span>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "g-toast",
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator: value => {
        return value === false || typeof value === "number";
      }
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "icon",
          callback: undefined
        };
      }
    },
    position: {
      type: String,
      default: "top",
      validator: value => {
        return ["top", "center", "bottom"].indexOf(value) !== -1;
      }
    }
  },
  components: {
    "g-icon": Icon
  },
  data() {
    return {};
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoClose * 1000);
    }
    if (this.autoClose === false) {
      this.$nextTick(() => {
        this.$refs.remove.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    }
  },
  computed: {
    toastPosition() {
      return `toast-${this.position}`;
    },
    iconOrtext() {
      return this.closeButton.text === "icon" ? true : false;
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    handleClose() {
      this.close();
      if (this.closeButton.callback !== undefined) {
        this.closeButton.callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-color: #fff;
$font-size: 14px;
$bg-color: rgba(0, 0, 0, 0.8);
$bg-shadow: 0, 0, 3, 0, rgba(0, 0, 0, 0.5);
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-bottom {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes fade-top {
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
.toast {
  color: $font-color;
  font-size: $font-size;
  background-color: $bg-color;
  box-shadow: $bg-shadow;
  border-radius: 4px;
  line-height: 1.8;
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  > .message {
    min-height: 40px;
    padding: 8px;
  }
  > .remove {
    display: flex;
    align-items: center;
    border-left: 1px solid #fff;
    padding: 8px;
    cursor: pointer;
    > .icon-remove {
      fill: #fff;
    }
  }

  &.toast-top {
    top: 0;
    transform: translateX(-50%);
    animation: fade-top 0.5s;
  }
  &.toast-center {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in 1s;
  }
  &.toast-bottom {
    bottom: 0;
    transform: translateX(-50%);
    animation: fade-bottom 0.5s;
  }
}
</style>