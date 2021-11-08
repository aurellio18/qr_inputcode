<template>
  <h1>Website Qr Scanner</h1>
  <div id="nav">
    <div class="nav-bar">
    <router-link to="/">Scan QR</router-link>
    <router-link to="/event">Event</router-link> 
    <router-link to="/gate">Gate</router-link> 
    <router-link to="/antrian">Antrian</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  text-decoration: none;
  padding: 10px;
  background-color: white;
}

.nav-bar{
  border: 1px solid black;
  border-radius: 10px;
  width: 296px;
  padding: 5px;
  margin: 0 auto;
}

h1{
  font-size: 20px;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: #42b983;
  padding: 5px 7px;
  border-radius: 10px;
}
</style>
