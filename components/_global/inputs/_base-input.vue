<template>
  <div>
    <input
      :placeholder="placeholder"
      :type="inputType"
      :value="value"
      @input="handleInput"
      class="form-control form-control-lg font-14 fw-300"
      :class="{ 'is-invalid': form.errors.has(field) }"
    />
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>
