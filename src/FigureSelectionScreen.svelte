<script>

import { createEventDispatcher } from 'svelte';

import GoalFigure from "./GoalFigure.svelte";

let selectedLayout;
$: disabledButton = !selectedLayout;

const dispatch = createEventDispatcher();

function selectLayout(){

  dispatch('layout', {
    selectedLayout
  })
}

const [o, l, x, m, ajedrez, tictac, full] = Array(7).fill(undefined).map((_) => Array(25).fill(false));
const layouts = [o, l, x, m, ajedrez, tictac, full];

for(let i = 0; i < 25; ++i){

  if(i === 12){
    continue;
  }
  full[i] = true;
  if(i % 5 === 0){
    o[i] = l[i] = m[i] = true;
  }
  if(i % 5 === 4){
    o[i] = m[i] = true;
  }
  if(i < 5){
    o[i] = true;
  }
  if(i > 19){
    o[i] = l[i] = true
  }
  if(i % 6 === 0){
    x[i] = true;
    if(i < 10){
      m[i] = true;
    }
  }
  if(i % 4 === 0){
    x[i] = true;
    if(i < 10){
      m[i] = true;
    }
  }
  if(i % 2 == 0){
    ajedrez[i] = true;
  }
  if(i % 5 === 1 || i % 5 === 3){
    tictac[i] = true;
  }
  if((4 < i && i < 10) || (14 < i && i < 20)){
    tictac[i] = true;
  }
}

</script>

<style>

button{

  border-radius: 10px;
}

.bcontainer{

  display: flex;
  justify-content: center;
  align-items: center;
}

.container{

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;

}

.inner{

  padding-left: 20%;
  padding-right: 20%;
}

.selection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows:  repeat(2, 1fr);
}

</style>


<div class="container">
  <div style="text-align: center;">
    <h1 style="color: #00A852;">Seleccione la figura ganadora</h1>
  </div>

  <div class="selection">
    {#each layouts as target}
      <div class="inner">
        <GoalFigure {target} />
        <input type="radio" bind:group={selectedLayout} name="layout" value={target}>
      </div>
    {/each}
    <div class="inner bcontainer">
      <button disabled={disabledButton} on:click={selectLayout}>seleccionar</button>
    </div>
  </div>
</div>

