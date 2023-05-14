<script>
  export default {
    name: 'app-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
  }
</script>

<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style scoped>
.input {
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-top: 15px;
}
.input::placeholder {
    color: #fff;
}
.input::-ms-reveal {
  filter: invert(100%);
}
</style>
