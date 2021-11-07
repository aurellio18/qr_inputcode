<template>
  <div id="nav">
    <h1>Website Qr Scanner</h1>
    <router-link to="/">Scan QR</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/gate">Gate</router-link> |
    <router-link to="/antrian">Antrian</router-link>
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
  padding: 30px;
  background-color: #42b983;
}

#nav h1{
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
}
</style>
