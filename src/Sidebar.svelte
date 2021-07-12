<script>
import { fly } from 'svelte/transition';

import GoalFigure from "./GoalFigure.svelte";

export let show = false;
export let target;
export let users;

let showingPlayers = true;
$: disablePlayers = showingPlayers;
$: disableFigure = !showingPlayers;

function toggleShowSidebar(){

  show = !show;
}

function toggleSubComponent() {

  showingPlayers = !showingPlayers;
}

</script>
		
<style>
nav {

  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  border-left: 3px solid #00A852;
  background: #fff;
  overflow-y: auto;
  border-radius: 20px;
  z-index: 10;
}

.main {

  width: 10rem;
  padding: 2rem 0.5rem 0.6rem;
}

.sec {

  width: 3rem;
  padding-top: 2rem;
  padding-left: 0.5rem;
  padding-bottom: 0.6rem;
}

.button-row {

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.7em;
}

.player-tray {

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  min-height: 70vh;
  max-height: 70vh;
  width: 100%;
}

.player-display {

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  padding: 1vh 1vw;
}

hr {

  border: none;
  height: 2vh;
}

.user-box {

  width: 90%;
  height: 1.8em;
  padding-top: 0.6em;
  margin: 0.1em 0.5em 0.1em 0.5em;
  text-align: center;
  background: #dae3f3;
  border-radius: 10px;
  border: 2px solid #92a5c5;
}
</style>

{#if show}
  <nav class="main" transition:fly={{x: 250, opacity: 1}}>
    <div class="button-row">
      <img src="images/hamburguer.svg" on:click={toggleShowSidebar} alt="opciones"/>
      <button disabled={disablePlayers} on:click={toggleSubComponent}>jugadores</button>
      <button disabled={disableFigure} on:click={toggleSubComponent}>figura</button>
    </div>
    {#if showingPlayers}
      <hr>
      <div class="player-display">
        <div style="display: flex; flex-direction: row;">
          <img src="images/user.svg" alt=""/>
          <div style="color: #0166AF; margin-left: 5px;">{users.length}</div>
        </div>
        <hr>
        <div class="player-tray">
          {#each users as player}
            <div class="user-box">
              {player.name}
              <hr>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div style="display: flex; flex-direction: column; justify-content: center;">
        <hr>
        <hr>
        <GoalFigure {target} />
      </div>
    {/if}
  </nav>
{:else}
  <nav class="sec" transition:fly={{x: 250, opacity: 1}}>
    <img src="images/hamburguer.svg" on:click={toggleShowSidebar} alt="opciones"/>
    <hr>
    <div style="text-align: center;">
      <img src="images/user.svg" alt=""/>
    </div>
    <div style="color: #0166AF; width: 3em; text-align: center;">{users.length}</div>
  </nav>
{/if}