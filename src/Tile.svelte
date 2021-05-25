<script>

import {markedStore} from './markedStore.js';

export let code;

$: state = $markedStore.get(code) ? "disabled" : "enabled";

</script>

<style>

.square {

  position: relative;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
}

.enabled {

  border: 1px solid #0166AF;
  background: #0166AF;
  color: white;
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}

.disabled{

  border: 1px solid #00A852;
  background: #00A852;
  color: white;
}

.square::before {

  content: '';
  display: block;
  padding-top: 100%;
}

.content {

  position: absolute;
  top: 0; left: 0;
  max-height: 100%;
  width: 100%;
  padding: 40% 0px;
  line-height: 40%;
  text-align: center;
  cursor: default;
}

</style>

<div class="square {state}">
  <div class="content">
    <div>{code}</div>
  </div>
</div>
