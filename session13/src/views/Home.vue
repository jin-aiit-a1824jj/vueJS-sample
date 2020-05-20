<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers(){
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  },
  computed: {
    count(){
      return this.$store.state.count;
    },
    doubleCount(){
      return this.$store.getters.doubleCounter;
    },
    tripleCount(){
      return this.$store.getters.tripleCounter;
    }
  }
}
</script>