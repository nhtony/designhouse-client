<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification Email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          We resent you the verification email.
        </alert-success>
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{ form.errors.get("message") }}
        </alert-error>
        <div class="form-group">
          <input
            type="text"
            name="email"
            class="form-control form-control-lg font-14 fw-300"
            v-model="form.email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>

        <div class="text-right">
          <button
            type="submit"
            :disabled="form.busy"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
            Resend
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['guest'],
  data() {
    return {
      form: this.$vform({
        email: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form
        .post(`/verification/resend`)
        .then((res) => {
          this.form.reset()
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>
