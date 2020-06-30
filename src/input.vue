<template>
  <div class="wrapper" :class="{error: error}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @change="$emit('change',$event.target.value)"
    />
    <div v-if="error" class="errorCon">
      <Icon name="err" class="iconError"></Icon>
      <span class="errorMsg">{{error}}</span>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "g-input",
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-zise: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$box-shadow-err-color: rgba(243, 79, 79, 0.5);
$border-err-color: rgb(245, 82, 82);
$border-err-color-hover: rgb(245, 82, 82);
.wrapper {
  font-size: $font-zise;
  display: inline-block;
  position: relative;
  margin: 8px 0;
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
    }
  }
  > .errorCon {
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    > .iconError {
      fill: red;
      font-size: 14px;
    }
    > .errorMsg {
      color: red;
    }
  }
  &.error {
    > input {
      height: 32px;
      border: 1px solid $border-err-color;
      border-radius: $border-radius;
      padding: 0 8px;
      &:hover {
        border-color: $border-err-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-err-color;
        outline: none;
      }
    }
  }
}
</style>