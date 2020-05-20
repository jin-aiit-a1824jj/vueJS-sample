<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <!-- <p>{{ count }}</p> -->
    <p>{{ doubleCounter }}</p>
    <p>{{ tripleCounter }}</p>
    <!-- <input type="text" :value="message" @input="updateMessage"> -->
    <input type="text" v-model="message"> 
    <p>{{ message }}</p>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
  methods: {
    toUsers(){
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    },
    // updateMessage(e){
    //   this.$store.dispatch("updateMessage", e.target.value);
    // }
  },
  computed:{ 
    //...mapGetters("count", ["doubleCounter", "tripleCounter"]),
    doubleCounter() {
      return this.$store.getters["count/doubleCounter"];
    },
    tripleCounter() {
      return this.$store.getters["count/tripleCounter"];
    },
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get(){
        return this.$store.getters.message;
      },
      set(value){
        this.$store.dispatch("updateMessage", value);
      }
    }
  }
}
</script>