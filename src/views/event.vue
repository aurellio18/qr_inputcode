<template>
  <div class="event">
    <img src="../assets/qr-code.png" alt="">
    <p>Masukkan Code</p>
    <p id="desc">Klik tombol dibawah ini untuk input code</p>
    <button class="input" @click="$refs.modalName.openModal()">Input Code</button>

     <modal ref="modalName">
      <template v-slot:header>
      </template>

      <template v-slot:body>
        <h3>Masukkan Code</h3>
        <input class="msg" v-model="message" placeholder="Ketik kode di sini">
      </template>

      <template v-slot:footer>
        <div>
          <button class="input input-ok" @click="$refs.modalName.closeModal()">Input Code</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  name: "App",
  components: {
    Modal
  }
};
</script>


<style>
.overflow-hidden {
  overflow: hidden;
}

img{
  margin-top: 50px;
}

p{
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

#desc{
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
}

button{
  text-decoration: none;
  background-color: none;
  border: none;
  padding: 10px;
}

.input{
  background-color: green;
  color: white;
  border-radius: 5px;
}

.input-ok{
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: 310px;
}

h3{
  color: #42b983;
}

.msg{
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid black;
}

</style>
