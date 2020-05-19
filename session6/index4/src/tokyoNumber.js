export const tokyoNumber = {
  data(){
    return {
      title: "Welcome to Tokyo",
      subtitle: "Tokyo is a great city",
      number: 0
    }
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    }
  },
  filters: {
    lowerCase(value){
      //this.tmpData = "can not use";
      return value.toLowerCase();
    }
  }
};