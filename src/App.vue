<script setup>
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light  mb-3">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-decoration-none text-white" aria-current="page" href="#">
            <i class="fa-solid fa-users mx-2"></i>
            <RouterLink class="text-decoration-none text-white" to="/">Customers</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-decoration-none text-white" href="#">
            <i class="fa-solid fa-box-open mx-2"></i>
            <RouterLink class="text-decoration-none text-white" to="/products">Products</RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-decoration-none text-white" href="#">
            <i class="fa-solid fa-cart-shopping mx-2"></i>
            <RouterLink class="text-decoration-none text-white" to="/orders">Orders</RouterLink>
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
.navbar{
  background-color: #044e8f;
}
</style>
