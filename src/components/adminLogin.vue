<script>
  export default {
    data() {
      return {
        form: {
          user: '',
          password: '',
        },
      }
    },
    methods: {
      login(){
        alert(this.form)
      }
    }
  }
</script>
<template>
<div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" v-model="form.user" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="form.password" placeholder="Enter Password" name="psw" required>

    <button type="submit" @click="login">Login</button>
  </div>
</template>
