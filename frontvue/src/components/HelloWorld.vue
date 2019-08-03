<template>
  <div class="hello">
    <h1 class="title">Front end Vue</h1> <!-- Page title -->

    <hr>

   <div class="columns">
  <div class="column is-half">
    <h2 class="subtitle">Todo</h2>

    <div class="todo">
      <div class="card" v-for="numero in numeros"> <!-- Loop through the tasks array, if status is 0 (to do) then we'll show it. -->
        <div class="card-content">
          <div class="content">
            <p>Numero 1: </p>{{ numero.num1 }} </br><!-- Print the task's description here -->
            <p>Numero 2: </p>{{ numero.num2 }} </br>
            <p>Id: </p>{{ numero.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      numeros: [] // Array for holding the tasks
    }
  },
  mounted () { // This will be called when HelloWorld is loaded
    this.getNumeros(); // Call our getTasks function below
  },
  methods: {
    getNumeros() {
        axios({
            method:'get',
            url: 'http://127.0.0.1:8000/soma/',
        }).then(response => this.numeros = response.data);
    }
  }
}
</script>

<style scoped>
.select, select { /* 100% width for the select */
  width: 100%;
}

.card { /* Adding some air under the tasks */
  margin-bottom: 25px;
}

.done { /* Make the done tasks a little bit transparent */
  opacity: 0.3;
}
</style>