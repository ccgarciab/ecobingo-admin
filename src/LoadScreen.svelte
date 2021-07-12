<script>

import { createEventDispatcher } from 'svelte'

export let loguedUsers;

const dispatch = createEventDispatcher();

function stopGather() {
  dispatch('stopGather');
}

</script>

<div>{loguedUsers}</div>
<button on:click={stopGather}>parar</button>