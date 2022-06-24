<template>
<nav id="navbar">
  <div class="container">
    <div class="logo">
      PICNIC
    </div>

    <ul class="navbar-items">
      <li class="item">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li class="item" v-if="!currentUser">
        <NuxtLink to="/register">
          Registrarse
        </NuxtLink>
      </li>
      <li class="item" v-if="currentUser">
        <NuxtLink to="/" >
          Hola, {{ currentUser.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data(){
    return {
      navItems: [
        { name: "Home", link: "/", needUser: false },
        { name: "Registrarse", link: "/register", needUser: true},
      ]
    }
  },
  computed:{
    ...mapState('user',['currentUser']),
    currentUser(){
      const userString = localStorage.getItem('user');
      if( userString && userString != "" ){
        const user = JSON.parse(userString);
        return user;
      }
      return null;
    }
  },
  methods:{
    ...mapMutations('user',['']),
  }
}
</script>

<style lang="scss" scoped>
#navbar{
  background-color: hsl(356deg 100% 64%);
  color: white;
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  .container{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    .logo{
      font-weight: bold;
      font-size: 1.2rem;
    }

    .navbar-items{
      display: flex;
      gap: 1rem;
    }
  }

}
</style>