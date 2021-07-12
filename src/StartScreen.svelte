<script>

import { createEventDispatcher } from 'svelte'

let user = "";
let room = "";
let userCount;

const dispatch = createEventDispatcher();

function logIn() {

  dispatch('login', {
    user,
    room,
    userCount
  })
}

</script>

<style>

.center_container {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

</style>

<div class="center_container">
  <input type="text" placeholder="Nombre de Usuario" bind:value={user}>
  <input type="text" placeholder="Sala de Juego" bind:value={room}>
  <input type="number" placeholder="Número de jugadores" bind:value={userCount}>
  <button on:click={logIn}>Empezar</button>
</div>