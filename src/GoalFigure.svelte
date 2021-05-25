<script>

import CenterTile from "./CenterTile.svelte";
import StaticTile from "./StaticTile.svelte";

export let figure;

</script>

<style>
.square-container {

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5vw;
}
</style>

<div class="square-container">
  {#each figure as marked, i}
    {#if i != 12}
      <StaticTile {marked} />
    {:else}
      <CenterTile/>
    {/if}
  {/each}
</div>