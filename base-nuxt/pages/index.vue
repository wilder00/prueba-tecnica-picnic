<template>
<article class="portfolio">
  <div class="container">

    <p class="welcome" v-if="currentUser">
      Bienvenido Usuario te registraste con el correo {{ currentUser.email }}
    </p>

    <h1 class="title"> Nuestro Portafolio </h1>
    <div class="portfolio-list">
      
      <div class="card" v-for="portfolio in portfolios" :key="portfolio.id">
        <picture class="picture">
          <img :src="portfolio.picture" alt="">
          <figcaption>
            {{ portfolio.title }} <br/>
            <span class="type-portfolio"> {{ portfolio.type }}</span>
          </figcaption>
        </picture>
      </div>

    </div>
  </div>  
</article>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data(){
    return{
      portfolios: [],
    }
  },
  computed:{
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

  },

  created(){
    this.$axios.get('http://localhost:3001/api/cards')
    .then((response)=>{
      
      const data = response.data.cards
      this.portfolios = data

    }).catch((error)=>console.log(error))
  }

}
</script>

<style lang="scss" scoped>

.portfolio{
  color: white;
  margin: 3rem 0;
  .container{
    width: 1200px;
    margin: 0 auto;

    .welcome{
      color: #FED141
    }
    .title{
      font-weight: bold;
      text-transform: uppercase;
      margin: 1rem 0;
      font-size: 1.5rem;
    }

    .portfolio-list{
      display: flex;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 1rem;
      column-gap: 5%;
      .card{
        width: 30%;

        .picture{
          img{
            width: 100%;
          }
          figcaption{
            background-color: black;
            height: 70px;
            padding: 0.5rem;

            .type-portfolio{
              color: #FED141
            }
          }
        }
      }
    }
  }
}

</style>