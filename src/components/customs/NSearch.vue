<template>
  <div>
    <form action>
      <n-layout :class="{focused: focused}">
        <n-flex class="n-col-10">
          <input
            type="text"
            @focus="focused = true"
            @blur="focused = false"
          >
        </n-flex>
        <n-flex class="n-col-2">
          <button type="submit">{{ $t('Search')}}</button>
        </n-flex>
      </n-layout>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SearchComponent',
  data: () => ({
    focused: false
  })
}
</script>

<style
  lang="scss"
  scoped
>
input {
  width: 100%;
  border: none;
  font-size: 16px;
  padding: 5px;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

button {
  width: 100%;
  border: none;
  background: #f8f8f8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
  transition: background 0.2s;
  &:hover {
    background: #dfdbdb;
  }
}
</style>
