<template>
  <div class="event">
    <h2>Masukkan kode</h2>
    <button class="input" @click="$refs.modalName.openModal()">Input Code</button>

     <modal ref="modalName">
      <template v-slot:header>
      </template>

      <template v-slot:body>
        <h3>Input Code dibawah ini</h3>
        <input v-model="message" placeholder="Masukkan Kode">
      </template>

      <template v-slot:footer>
        <div>
          <button class="input" @click="$refs.modalName.closeModal()">Input Code</button>
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

h2{
  margin-top: 75px;
  font-size: 2rem;
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
  margin: 0;
}
</style>
