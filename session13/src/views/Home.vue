<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ count }}</p>
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
      console.log(this.$store);
      return this.$store.state.count;
    }
  }
}
</script>