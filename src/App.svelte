<script>

import { UserGatheringConnection, roomDocument } from './userGathering.js'

import { fade } from 'svelte/transition';

import FigureSelectionScreen from "./FigureSelectionScreen.svelte";
import LoadScreen from "./LoadScreen.svelte";
import PlayingScreen from "./PlayingScreen.svelte";
import StartScreen from "./StartScreen.svelte";

let screen = 0;
let target = new Array(25).fill(false);
target[12] = false;
let loguedUsers = 0;
let room;
let users = [];
let userCount;
let user;

function stopGatherAndContinue(){

  UserGatheringConnection.stopGatheringUsers();
  screen = 3;
}

function startTargetSelection(loginEvent){

  screen = 1;
  ({user, room, userCount} = loginEvent.detail);
}

function createRoom(layoutEvent){

  screen = 2;

  target = layoutEvent.detail.selectedLayout;

  UserGatheringConnection.onuser = (u) => {

    users.push(u);
    loguedUsers += 1;
  }
  
  UserGatheringConnection.startGatheringUsers(room, userCount, target);
}
  
</script>
  

{#if screen == 0}
  <StartScreen on:login={startTargetSelection}/>
{:else if screen == 1}
  <FigureSelectionScreen on:layout={createRoom}/>
{:else if screen == 2}
  <LoadScreen {loguedUsers} on:stopGather={stopGatherAndContinue} />
{:else if screen == 3}
  <div transition:fade>
    <PlayingScreen {user} {room} {users} {roomDocument} {target} />
  </div>
{/if}
  