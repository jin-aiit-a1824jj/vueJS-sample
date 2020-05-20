<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
    <!-- <p>{{ count }}</p> -->
    <p>{{ doubleCounter }}</p>
    <p>{{ tripleCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    toUsers(){
      this.$router.push({
        name: "users-id-profile",
        params: { id: 1 }
      });
    }
  },
  computed:{ 
    ...mapGetters(["doubleCounter", "tripleCounter"])
  }
}
</script>