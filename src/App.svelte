<script>
  import adapter from 'webrtc-adapter';

  import { users, notifier, startGatherUsers, stopGatherUsers } from './userGathering.js'

  import { fade } from 'svelte/transition';
  
  import LoadScreen from "./LoadScreen.svelte";
  import PlayingScreen from "./PlayingScreen.svelte";
  import StartScreen from "./StartScreen.svelte";
  
  let screen = 0;
  let card;
  let target = new Array(25).fill(false);
  target[12] = false;
  let sessionData;
  let loguedUsers = 0;

  function stopGatherAndContinue(){

    stopGatherUsers();
    screen = 2;
  }

  function createRoom(event){

    screen = 1;

    let {room, userCount} = event.detail;

    notifier.addEventListener("notify", (e) => {

      const {channel, card} = users[loguedUsers];
      const payload = JSON.stringify({target, card});
      channel.onopen = (_) => {

        channel.send(payload);
      }
      
      loguedUsers += 1;

      if(loguedUsers >= userCount){
        stopGatherAndContinue();
      }
    });
    
    startGatherUsers(room, userCount);
  }
  
  </script>
  
  {#if screen == 0}
    <StartScreen on:login={createRoom}/>
  {:else if screen == 1}
    <LoadScreen {loguedUsers} on:stopGather={stopGatherAndContinue} />
  {:else}
    <div transition:fade>
      <PlayingScreen {users} {target} />
    </div>
  {/if}
  