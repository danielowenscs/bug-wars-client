<template>
  <div class="homepage">
    <div class="logo">
      <span class="dot">LOGO</span>
      <!-- Placeholder for logo to be replaced later -->
    </div>

    <div class="title">
      <h1>BUG WARS</h1>
    </div>

    <div class="wrapper">
      <nav class="menu-buttons">
        <button @click="$router.push('/')">Play Game</button>
        <button @click="$router.push('/')">How to Play</button>
        <button @click="$router.push('/userid/scripts')">Scripts</button>
        <button @click="$router.push('/')">Credits</button>
      </nav>
    </div>
    <div class="login">
      <nav class="login-buttons">
        <button @click="$router.push('/login')">Login</button>
        <button @click="$router.push('/')">Register</button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.homepage {
  line-height: 1.5;
  height: 100vh;
  background-color: #026161;
}

.title {
  margin: auto;
  text-align: center;
  color: white;
}

.wrapper {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: auto;
  margin-bottom: auto;
}

.menu-buttons {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
}

button {
  background-color: purple;
  color: white;
  border-radius: 8px;
  padding: 5% 5%;
}

.login {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: auto;
  margin-bottom: auto;
}

.login-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10vw;
  grid-row-gap: 0px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  padding: 5%;
  text-align: center;
}

.dot {
  /* Placeholder circle for logo to remove later */
  height: 150px;
  width: 150px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .homepage {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .menu-buttons {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }

  .wrapper {
    margin-left: 50%;
    margin-right: 50%;
    margin-top: auto;
    margin-bottom: auto;
  }

  button {
    background-color: purple;
    color: white;
    border-radius: 8px;
    padding: 10px 100px;
  }

  .login-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10vw;
    grid-row-gap: 0px;
  }

  .homepage .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
