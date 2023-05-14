<script>
  export default {
    name: 'app-button'
  }
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 10px 30px;
  border-radius: 12px;
  cursor: pointer;
  color: var(--color-text);
  border: none;
  background-color: var(--main-color);
  text-transform: uppercase;
  font-weight: bold;
}
</style>
