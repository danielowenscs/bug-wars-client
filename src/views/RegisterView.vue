<template>
  <div class="register-page">
    <h2>Create an Account</h2>
    <form @submit.prevent="register" class="register-form">
        <label for="username">Username: 
            <input type="text" id="username" minlength="3" maxlength="20" v-model="newUser.username" required />
        </label>
        <label for="email">Email Address: 
            <input type="email" id="email" maxlength="50" v-model="newUser.email" required />
        </label>
        <label for="password">Password: 
            <input type="password" id="password" minlength="6" maxlength="40" v-model="newUser.password" required />
        </label>
        <button type="submit">Register</button>
    </form>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const newUser = reactive({
  username: '',
  email: '',
  password: '',
});

const router = useRouter();
const toast = useToast();

const register = () => {
    authService
        .register(newUser)
        .then((response) => {
            if (response.status === 201) {
                toast.success('Successfully created account');
                router.push('/login');
                
            }
        })
        .catch((error) => {
            const response = error.response;
            console.log(response);
            toast.error("Error creating account")
        });
}
</script>


<style scoped>
.register-page {
    margin: auto;
    width: 100%;
    text-align: center;
}
.register-form {
    display: inline-grid;
}

input {
    display: block;
}

label {
    display: block;
    margin-bottom: 20px;
}

</style>