<template>
    <div class="show-message" v-if='isShowMessage'>
      <div>
        <div>Hi, welcome!</div> 
        <app-button
        style="margin-top: 10px;"
        @click="this.$emit('closeModal', true)"
        >CLOSE</app-button>
      </div>
      
      <img src="@/assets/images/beheaded.webp">
    </div>

    <form v-else @submit="formSubmit">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <app-input
        v-focus
        v-model="userName"
        type="text"
        placeholder="USERNAME"
      />
      <app-input
        v-model="password" 
        type="password"
        placeholder="PASSWORD"
      />
      <app-button
        style="margin-top: 15px;"
      >
        SEND
      </app-button>
    </form>
  </template>
<script>
  export default {
    data() {
      return {
        errors: [],
        userName: null,
        password: null,
        isShowMessage: false
      }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();

            if (!this.userName || !this.password) {
              this.errors = [];
              if(!this.userName) this.errors.push("Name required.")
              if(!this.password) this.errors.push("Password required.");
            } else {
              let currentObj = this;
              this.axios.post('https://jsonplaceholder.typicode.com/users', {
                  userName: this.userName,
                  password: this.password
              })
              .then((response) => {
                  currentObj.output = response.data;
                  this.showMessage();
                  console.log('Form is send');
              })
              .catch((error) => {
                  currentObj.output = error;
                  console.log('Something wrong!');
              });
            }

        },
        showMessage() {
          this.isShowMessage = true;
        }
    }
    
  }
</script>
  
<style scoped>
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
  }
  .show-message {
    padding: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .show-message img {
    max-width: 200px;
  }
</style>
  