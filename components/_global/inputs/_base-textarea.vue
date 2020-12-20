<template>
  <div>
    <textarea
      :placeholder="placeholder"
      :rows="rows"
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
    rows: {
      type: Number,
      default: 3,
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
