<style>

.square {

  position: relative;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
  background: transparent;
}

.square::before {

  content: '';
  display: block;
  padding-top: 100%;
}

.square .content {

  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
}
.content {

  text-align: center;
  cursor: default;
}

.logo {

  max-height: 100%;
  max-width: 100%;
}

</style>


<div class="square">
  <div class="content">
    <img class="logo" src="images/logo.svg" alt="Logo Corpochivor" />
  </div>
</div>


