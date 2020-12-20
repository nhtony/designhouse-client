<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">Register</h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form"
          >We sent you an email to activate your account.</alert-success
        >
        <div class="form-group">
          <base-input
            :form="form"
            field="name"
            v-model="form.name"
            placeholder="Full Name"
          >
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="username"
            v-model="form.username"
            placeholder="Username"
          >
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="email"
            v-model="form.email"
            placeholder="Email"
          >
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="password"
            inputType="password"
            v-model="form.password"
            placeholder="Password"
          >
          </base-input>
        </div>
        <div class="form-group">
          <base-input
            :form="form"
            field="password_confirmation"
            inputType="password"
            v-model="form.password_confirmation"
            placeholder="Confirm Password"
          >
          </base-input>
        </div>

        <div class="text-right">
          <base-button :loading="form.busy">Register</base-button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <nuxt-link :to="{ name: 'login' }" class="color-blue">
            Login
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ["guest"],
  data() {
    return {
      form: this.$vform({
        username: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
    };
  },

  methods: {
    submit() {
      this.form
        .post(`/register`)
        .then((res) => {
          this.form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
