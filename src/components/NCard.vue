<template>
  <div class="card">
    <slot name="header">Default header</slot>
    <slot name="content">Default content</slot>
    <n-divider
      :dividerColor="dividerColor"
      :dividerWidth="dividerWidth"
      :dividerBorderSize="dividerBorderSize"
      :dividerStyle="dividerStyle"
    />
    <slot name="footer">Default footer</slot>
  </div>
</template>

<script>

export default {
  name: 'NCardComponent',
  props: {
    withDivider: {
      type: Boolean,
      deafult: () => false
    },
    dividerColor: {
      type: String,
      default: '#bebcbc'
    },
    dividerWidth: {
      type: String,
      default: '100%'
    },
    dividerBorderSize: {
      type: String,
      default: `1px`
    },
    dividerStyle: {
      type: String,
      default: 'solid'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: white;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
</style>
