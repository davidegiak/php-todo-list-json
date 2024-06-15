const {
  createApp
} = Vue

createApp({
  data() {
    return {
      toDo: [],
      addNewTask: "",
      postRequestConfig: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    }
  },
  methods: {
    addTask() {
      const toDoStuff = {
        task: this.addNewTask,
        state: true
      };

      axios.post('../create.php', toDoStuff, this.postRequestConfig).then(results => {
        let i = 0;
        let risultato = results.data;
        while (i < risultato.length) {
          if (risultato[i].state == "true") {
            risultato[i].state = true
          }
          i++
        }
        console.log("Risultati: ", risultato);
        this.toDo = risultato;
      });
    },
    deleteTask(i) {
      const toDeleteStuff = {
        indice: i
      };
      axios.post('../delete.php', toDeleteStuff, this.postRequestConfig).then(results => {
        console.log("Risultati: ", results.data);
        console.log("aggiungi task", this.addNewTask);
        this.toDo = results.data;
      });
    }

  },
  mounted() {
    console.log("Recupero i dati dal server");

    axios.get("../list.php").then(results => {
      console.log("Risultati: ", results);
      this.toDo = results.data;
      console.log(this.toDo);
    });
  }
}).mount('#app')