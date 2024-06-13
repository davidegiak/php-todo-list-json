const { createApp } = Vue

createApp({
  data() {
    return {
        toDo: []
    }
  },
  methods: {

  },
  mounted() {
    console.log("Recupero i dati dal server");

    axios.get("../php/api.php").then(results => {
        console.log("Risultati: ", results);
        this.toDo = results.data;
    });
  }
}).mount('#app')