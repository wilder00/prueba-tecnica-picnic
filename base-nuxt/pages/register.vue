<template>
<article class="register">
  <div class="container">

    <form class="register-form" @submit.prevent="registerUser">
      <h1 class="form-title"> Formulario de registro </h1>

      <div class="form-field">
        <input type="text" v-model="registerForm.name" name="name" placeholder="Nombre" id="">
      </div>
      
      <div class="form-field">
        <input type="text" v-model="registerForm.email" name="email" placeholder="Correo" id="">
      </div>

      <div class="error" v-if="error">
        <span class="error-text" >{{ error }}</span>
      </div>
      <div class="success" v-if="success">
        <span class="error-text" >{{ successMessage }}</span>
      </div>

      <button class="submit-button" type="submit">

        Enviar
      </button>

    </form>

  </div>
</article>
</template>

<script>
import { mapMutations, mapState } from 'vuex'


export default {
  data(){
    return {
      registerForm: {
        name: "",
        email:"",
      },
      error:null,
      success:null,
      successMessage: "Se registró correctamente"
    }
  },
  methods:{
    ...mapMutations['user',['setCurrentUser']],
    async registerUser(){
      
      try {

        this.error = null;
        this.success = null;

        const response = await this.$axios.post("http://localhost:3001/api/users", this.registerForm)
        const user = response.data;
        if(user){
          this.saveUserLocal(user);
          this.success = true;
          this.resetForm();
          this.$router.push("/");
        }

      } catch (error) {
        if(error.response){
          console.log({ theerror: error.response });
          const message = error.response.data.message;
          const text = typeof(message) === "string"? message : message[0]
          this.error = text;
        }
      }
    },

    resetForm(){
      this.registerForm = ""
      this.email = ""
    },

    saveUserLocal(user){
      localStorage.setItem("user", JSON.stringify(user))
    }
  }
}
</script>
<style lang="scss" scoped>
.register{
  min-height: 70vh;
  width: 100%;
  .container{
    max-width: 1200px;
    min-height: inherit;
    display: flex;
    margin: 0 auto;

    .register-form{
      background-color: white;
      width: 400px;
      height: 230px;
      margin: auto;
      padding: 1rem 3rem;
      border-radius: 5px;
      text-align: center;
      .form-title{
        color: hsl(356deg 100% 64%);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 1rem;
      }
      .form-field{
        margin: 8px 0;

        input{
          width: 100%;
          border: 2px solid hsl(210deg 4% 89%);
          border-radius: 5px;
          padding: 5px 15px;
        }

      }

      .error{
        color: red;
        padding: 5px 0;
      }
      .success{
        color: rgb(43, 191, 99);
        padding: 5px 0;
      }
      .submit-button{
        background-color:hsl(356deg 100% 64%) ;
        color: white;
        padding: 2px 2rem;
        border-radius: 15px;
        width: fit-content;
        margin: 3px auto;
        text-transform: uppercase;
      }
    }
  }
}

</style>