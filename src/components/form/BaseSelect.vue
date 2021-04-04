<template>
  <label>{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onchange: $event => {
        $emit('updata:modelValue', $event.target.value)
      }
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
