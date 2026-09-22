<template>
  <div>
    <nav class="navbar">
      <h2>Assignment Tracker</h2>

      <div class="nav-links">
        <Router-link to="/">Home</Router-link>
        <Router-link to="/assignments">Assignments</Router-link>
        <Router-link to="/about">About</Router-link>
      </div>
    </nav>

    <main class="main-container">
      <Router-view />
    </main>
  </div>
 </template> 


<script setup>
import{ RouterLink, RouterView } from 'vue-router'
</script>


