<template>
  <div class="register-page">
    <h2>Create an Account</h2>
    <form @submit.prevent="register" class="register-form">
      <label for="username"
      >Username: 
      </label>
      <input
          type="text"
          id="username"
          minlength="3"
          maxlength="20"
          v-model="newUser.username"
          required
        />
      <label for="email"
        >Email Address:
      </label>
      <input type="email" id="email" maxlength="50" v-model="newUser.email" required />
      <label for="password"
        >Password:
      </label>
      <input
          type="password"
          id="password"
          minlength="6"
          maxlength="40"
          v-model="newUser.password"
          required
        />

      <label for="passwordDuplicate"
        >Re-enter Password:
      </label>
      <input
          type="password"
          id="passwordDuplicate"
          minlength="6"
          maxlength="40"
          v-model="passwordDuplicate"
          required
        />
        <span v-if="!passwordMatch">Passwords must be matching</span>
      <button type="submit">Register</button>
    </form>
    
    <a href="/bug-wars-client/login" class="login-link">Already have an account? Login here</a>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const newUser = reactive({
  username: '',
  email: '',
  password: '',
});

const passwordDuplicate = ref('');
let passwordMatch = ref(true);

const router = useRouter();
const toast = useToast();

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
        router.push('/login');
      }
    })
    .catch((error) => {
      const response = error.response;
      console.log(response);
      toast.error('Error creating account');
    });
};
</script>

<style scoped>
.register-page {
  display: grid;
  grid-template-areas: 
  "register-form" 
  "login-link";
  justify-content: center;
  margin: auto;
  width: 100%;
  text-align: center;
}

.register-form {
  grid-area: "register-form";
  display: inline-grid;
  padding-top: 5px;
}

span {
  padding: 10px;
  color: red;
}

input {
  margin-bottom: 10px;
}

button {
  width: 50vw;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-link {
  grid-area: "login-link";
  font-size: 15px;
}

</style>
