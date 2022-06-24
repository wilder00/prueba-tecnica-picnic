<template>
<div class="layout">
  <div class="nav">
    <HeaderApp></HeaderApp>
  </div>

  <main class="main">
    <Nuxt />
  </main>

  <div class="footer">
    <FooterApp></FooterApp>
  </div>
</div>
</template>
<script>
import HeaderApp from '~/components/forLayout/HeaderApp.vue';
import FooterApp from '~/components/forLayout/FooterApp.vue';
export default {
  components: { HeaderApp, FooterApp }
}
</script>
<style lang="scss" scoped>

.layout{
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  gap:0;
  $nav-height:  60px;
  .nav{
    position: fixed;
    width: 100%;
    height: $nav-height;
  }
  .main{
    margin-top: $nav-height;
    background-color: hsl(356deg 100% 64%);
    flex-grow: 1;
  }
}

</style>