<template>
  <div class="register-page">
    <div class="Large-Headline-Text">REGISTER</div>
    <form @submit.prevent="register">
      <div class="input-container">
        <input
          type="text"
          class="input"
          id="username"
          minlength="3"
          maxlength="20"
          v-model="newUser.username"
          placeholder="ENTER USERNAME"
          required
        />
        <label for="username" class="input-label">USERNAME</label>
      </div>

      <div class="input-container">
        <input
          type="email"
          class="input"
          id="email"
          maxlength="50"
          v-model="newUser.email"
          placeholder="ENTER EMAIL"
          required
        />
        <label for="email" class="input-label">EMAIL</label>
      </div>

      <div class="input-container">
        <input
          type="password"
          class="input"
          id="password"
          minlength="6"
          maxlength="40"
          v-model="newUser.password"
          placeholder="ENTER PASSWORD"
          required
        />
        <label for="password" class="input-label">PASSWORD</label>
      </div>

      <div class="input-container">
        <input
          type="password"
          class="input"
          id="passwordDuplicate"
          minlength="6"
          maxlength="40"
          v-model="passwordDuplicate"
          placeholder="RE-ENTER PASSWORD"
          required
        />
        <label for="passwordDuplicate" class="input-label">CONFIRM PASSWORD</label>
      </div>
      <span class="error-message" v-if="!passwordMatch">Passwords must be matching</span>
      <button type="submit" class="primary-button">REGISTER</button>
    </form>

    <a href="/bug-wars-client/login" class="Body-Text">ALREADY HAVE AN ACCOUNT? LOGIN HERE</a>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { useAuthStore } from '@/stores/AuthStore';

const newUser = reactive({
  username: '',
  email: '',
  password: '',
});

const passwordDuplicate = ref('');
let passwordMatch = ref(true);

const router = useRouter();
const toast = useToast();
const authStore = useAuthStore();

const register = () => {
  if (newUser.password !== passwordDuplicate.value) {
    passwordMatch.value = false;
    return;
  }
  authService
    .register(newUser)
    .then((response) => {
      passwordMatch.value = true;
      if (response.status === 201) {
        toast.success('Successfully created account');
        // router.push('/login');
        login();
      }
    })
    .catch((error) => {
      const response = error.response;
      console.log(response);
      toast.error('Error creating account');
    });
};

const login = () => {
  authService.login({ username: newUser.username, password: newUser.password }).then((response) => {
    if (response.status === 200) {
      authStore.setAuthToken(response.data.token);
      router.push('/lobby');
    }
  });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.register-page {
  display: grid;
  grid-template-areas:
    'headline'
    'register-form'
    'login-link';
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
  grid-area: 'register-form';
}

.Body-Text {
  grid-area: 'login-link';
  margin-top: 32px;
  text-align: center;
  padding-bottom: 32px;
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

#passwordDuplicate {
  margin-bottom: 0px;
}

.primary-button { 
  margin-top: 32px;
}
</style>
