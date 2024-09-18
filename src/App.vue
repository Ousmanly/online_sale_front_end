<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/customers/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <i class="fa-solid fa-users mx-2"></i>
            <RouterLink to="/">Customers</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-box-open mx-2"></i>
            <RouterLink to="/products">Products</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-cart-shopping mx-2"></i>
            <RouterLink to="/orders">Orders</RouterLink>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
