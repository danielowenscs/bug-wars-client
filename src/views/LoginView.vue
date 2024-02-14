<template>
  <div class="login-page">
    <div class="Large-Headline-Text">LOGIN</div>
    <form @submit.prevent="login">
      <div class="input-container">
        <input
          type="text"
          class="input"
          id="username"
          v-model="user.username"
          placeholder="ENTER USERNAME"
          required
        />
        <label class="input-label">USERNAME</label>
      </div>

      <div class="input-container">
        <input
          type="password"
          class="input"
          id="password"
          v-model="user.password"
          placeholder="ENTER PASSWORD"
          required
        />
        <label for="password" class="input-label">PASSWORD</label>
      </div>
      <button type="submit" class="primary-button">LOGIN</button>
    </form>

    <a href="/bug-wars-client/register" class="Body-Text">CREATE AN ACCOUNT</a>
    <span class="error-message" v-show="invalidLogin">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';

const user = reactive({
  username: '',
  password: '',
});
const invalidLogin = ref(false);

const router = useRouter();

const authStore = useAuthStore();
let errorMessage = ref('');

const login = () => {
  authService
    .login(user)
    .then((response) => {
      if (response.status === 200) {
        authStore.setAuthToken(response.data.token);
        router.push('/lobby');
      }
    })
    .catch((e) => {
      console.log(e);
      if (e.status === 401) {
        invalidLogin.value = true;
        errorMessage.value = 'Incorrect Username or Password.';
      } else {
        invalidLogin.value = true;
        errorMessage.value = 'Cannot login. Please try again later.';
      }
    });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.login-page {
  display: grid;
  grid-template-areas:
    'headline'
    'login-form'
    'register-link';
  align-items: end;
  margin: 0px $MobileEdgeInset;
  height: 100%;
}

.Large-Headline-Text {
  grid-area: 'headline';
  text-align: center;
  padding-bottom: 64px;
}

.input-container {
  grid-area: 'login-form';
}

.Body-Text {
  grid-area: 'register-link';
  margin-top: 32px;
  text-align: center;
}

.error-message {
  text-align: center;
  margin-top: 0px;
  margin-bottom: auto;
  padding-bottom: 32px;
}

a {
  margin-top: 8px;
  text-decoration: none;
}

span {
  padding-top: 12px;
}
</style>
