const { createApp } = Vue

createApp({
  data() {
    return {
        toDo: [],
        addNewTask:"",
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
        console.log("Risultati: ", results.data);
        console.log("aggiungi task", this.addNewTask);
        this.addNewTask = results.data;
        return this.addNewTask
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