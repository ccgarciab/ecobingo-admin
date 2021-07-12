<script>

import { createEventDispatcher } from 'svelte'

export let loguedUsers;

const dispatch = createEventDispatcher();

function stopGather() {
  dispatch('stopGather');
}

</script>

<style>

.container{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.texto{

  font-size: 7vh;
  color: #00A852;
}

hr{

  visibility: hidden;
}

button{

  border-radius: 10px;
}

</style>

<div class="container">
  <div class="texto">{`${loguedUsers} usuario${loguedUsers === 1 ? '' : 's'} conectado${loguedUsers === 1 ? '' : 's'}`}</div>
  <hr><hr>
  <button on:click={stopGather}>empezar el juego</button>
</div>