import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/verification/verify/:id', name: 'verify', component: page('auth/verification/verify.vue') },
  { path: '/verification/resend', name: 'resend', component: page('auth/verification/resend.vue') },
  { path: '/password/email', name: 'password.email', component: page('auth/password/reset-email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/password-reset.vue') },
  { path: '/upload', name: 'designs.upload', component: page('user/designs/create.vue') },
  { path: '/upload/:id/edit', name: 'designs.edit', component: page('user/designs/edit.vue') },
  {
    path: '/settings',
    component: page('user/settings/index.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'settings.dashboard' }
      },
      {
        path: 'dashboard',
        name: 'settings.dashboard',
        component: page('user/settings/dashboard.vue')
      },
      {
        path: 'profile',
        name: 'settings.profile',
        component: page('user/settings/profile.vue')
      },
      {
        path: 'design',
        name: 'settings.design',
        component: page('user/settings/designs.vue')
      }
    ]
  },
]

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}
