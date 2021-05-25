<script>

import {allCodes} from './randomCard.js';

import Tile from './Tile.svelte';

</script>

<style>

.container {

  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-gap: 0.5vw;
}

.bingo_letter {

  text-align: center;
  color: #00A852;
  font-family: helvetica;
  font-size: 200%;
  padding-top: 20%;
}

</style>


<div class="container">
  {#each allCodes as code, i}
    {#if i % 15 === 0}
      <div class="bingo_letter">
        {"BINGO"[i/15]}
      </div>
    {/if}
    <Tile {code} on:overtile/>
  {/each}
</div>

