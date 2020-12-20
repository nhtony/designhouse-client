<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">{{ status }}</alert-success>
        <p>
          <nuxt-link :to="{ name: 'login' }" class="color-blue">
            Proceed to Login
          </nuxt-link>
        </p>
        <div class="form-group">
          <input
            type="text"
            name="email"
            readonly
            class="form-control form-control-lg font-14 fw-300"
            v-model="form.email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control form-control-lg font-14 fw-300"
            v-model="form.password"
            :class="{ 'is-invalid': form.errors.has('password') }"
            placeholder="New password"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            v-model="form.password_confirmation"
            :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
            placeholder="Confirm new password"
          />
        </div>
        <div class="text-right">
          <button
            type="submit"
            :disabled="form.busy"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
          >
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Reset password
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
      status: "",
      form: this.$vform({
        email: "",
        password: "",
        password_confirmation: "",
        token: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form
        .post("password/reset")
        .then((res) => {
          this.status = res.data.status;
          this.form.reset();
        })
        .catch((e) => {
          console.log(e.response.data.errors);
        });
    },
  },

  created() {
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token;
  },
};
</script>

<style>
</style>
