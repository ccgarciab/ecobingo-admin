<script>

import {markedStore} from "./markedStore.js";
import {BallotBox} from "./randomCard.js";

import BalotShowcase from "./BalotShowcase.svelte";
import Label from "./Label.svelte";
import Logos from "./Logos.svelte";
import Grid from "./Grid.svelte";
import Sidebar from './Sidebar.svelte';

export let user;
export let room;
export let users;
export let target;
export let roomDocument;

let bingoCode = "";
let ballotDrawn = false;
$: disabledDraw = ballotDrawn;
$: disabledSend = !ballotDrawn;
let ballotBox = new BallotBox();

let sidebarShow = false;

function drawBalot() {

  bingoCode = ballotBox.getRandomCode();
  ballotDrawn = true;
}

function sendBalot() {

  roomDocument.update({ ballot: bingoCode});
  if(bingoCode != ''){

    $markedStore.set(bingoCode, true);
    $markedStore = $markedStore;
  }
  ballotDrawn = false;
}

for (let player of users) {

  player.userDocument.onSnapshot((snapshot) => {
    const data = snapshot.data();
    if(data?.won) {
      let reallyWon = player.card.every((ballot) => $markedStore.get(ballot));
      if(reallyWon) {
        alert(`El jugador ${player.name} ha ganado!`);
      }
    }
  });
}

</script>

<style>

.grid-container {

  width: 70vw;
  margin-top: 7vh;
}

.row {

  display: flex;
  flex-direction: row;
  margin-left: 2vw;
}

.showcase {

  width: 20vw;
  margin-top: 7vh;
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
}

.buttons {

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>

<div class="row" style="justify-content: space-around;">
  <div style="height: 7rem;">
    <Logos />
  </div>
  <h1 style="color: #00A852;">BINGO AMBIENTAL</h1>
  <div style="display: flex; flex-direction: row ;padding-right: 2.5vw; padding-top: 2vh;">
    <Label content={`Sala: <b>${room}</b>`}/>
    <Label content={`Admin: <b>${user}</b>`}/>
  </div>
</div>

<div class="row">
  <div class="grid-container">
    <Grid />  
  </div>
  <div class="showcase">
    <div style="height: 110%;">
      <BalotShowcase label="Balota en juego" {bingoCode}/>
    </div>
    <div class="buttons">
      <button on:click={drawBalot} disabled={disabledDraw}>sacar balota</button>
      <button on:click={sendBalot} disabled={disabledSend}>enviar balota</button>
    </div>
  </div>
</div>

<Sidebar {users} {target} bind:show={sidebarShow} />