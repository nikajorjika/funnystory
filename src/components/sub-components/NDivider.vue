<template>
  <div
    class="divider"
    v-bind:style="{color: dividerColor, width: dividerWidth, borderBottom: border}"
  ></div>
</template>

<script>
export default {
  name: "DividerComponent",
  props: {
    dividerColor: {
      type: String,
      default: "#bebcbc"
    },
    dividerWidth: {
      type: String,
      default: "100%"
    },
    dividerBorderSize: {
      type: String,
      default: `1px`
    },
    dividerStyle: {
      type: String,
      default: "solid"
    }
  },
  computed: {
    border: function() {
      return `${this.dividerBorderSize} ${this.dividerStyle} ${
        this.dividerColor
      }`;
    }
  }
};
</script>