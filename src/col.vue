<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "g-col",
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String] },
    xs: { type: Object, validator },
    sm: { type: Object, validator },
    md: { type: Object, validator },
    lg: { type: Object, validator },
    xl: { type: Object, validator },
    xxl: { type: Object, validator }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, xs, sm, md, lg, xl, xxl } = this;
      let createClass = this.createClass;
      return [
        ...createClass({ span, offset }),
        ...createClass(xs, "xs-"),
        ...createClass(sm, "sm-"),
        ...createClass(md, "md-"),
        ...createClass(lg, "lg-"),
        ...createClass(xl, "xl-"),
        ...createClass(xxl, "xxl-")
      ];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  },
  methods: {
    createClass(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-color-1: cornflowerblue;
$bg-color-2: rgb(23, 99, 241);
$border-color: #ccc;

.col {
  height: 64px;
  //   border: 1px solid $border-color;
  //   background: $bg-color-1;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $margin-offset: offset-;
  @for $m from 1 through 24 {
    &.#{$margin-offset}#{$m} {
      margin-left: ($m/24) * 100%;
    }
  }

  @media (max-width: 576px) {
    $class-prefix: col-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-xs-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }

  @media (min-width: 576px) {
    $class-prefix: col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-sm-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }

  @media (min-width: 768px) {
    $class-prefix: col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-md-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }

  @media (min-width: 992px) {
    $class-prefix: col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-lg-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }

  @media (min-width: 1200px) {
    $class-prefix: col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-xl-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }

  @media (min-width: 1600px) {
    $class-prefix: col-xxl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $margin-offset: offset-xxl-;
    @for $m from 1 through 24 {
      &.#{$margin-offset}#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
}
</style>