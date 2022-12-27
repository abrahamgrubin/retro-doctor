<script>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { Authenticator,useAuthenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
const auth = useAuthenticator();
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Authenticator
  },
  data(){
    return {
      auth: auth
    }
  },
});
</script>

<template>
  <authenticator></authenticator>

  <ion-app v-if="this.auth.authStatus == 'authenticated'">
      <ion-router-outlet />
  </ion-app>
</template>

<!--<template>-->
<!--  <authenticator></authenticator>-->
<!--  <template v-if="this.auth.authStatus === 'authenticated'">-->
<!--  <h1>Authenticated</h1>-->
<!--      <button @click="this.$router.push('/auth')">Login</button>-->
<!--  <template>-->
<!--    <authenticator>-->
<!--        <template v-slot="{ user, signOut }">-->
<!--        <h1>{{ user.username }}</h1>-->
<!--        <button @click="signOut">Sign Out</button>-->
<!--    </template>-->
<!--  </authenticator>-->
<!--  <h1>{{ this.auth.authStatus }}</h1>-->
<!--</template>    -->
<!--  </template>-->


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
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
