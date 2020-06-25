<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "g-button",
  components: { "g-icon": Icon },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      default: "left",
      type: String,
      validator(value) {
        return value !== "left" && value !== "right" ? false : true;
      }
    }
  }
};
</script>

<style lang="scss">
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
    line-height: 1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>