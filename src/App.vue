<script setup>
</script>

<template>
  <header class="mb">
    <nav class="my-navbar navbar navbar-expand-lg navbar-light fixed-top  " >
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-decoration-none text-white" aria-current="page" href="#">
            
            <RouterLink class="text-decoration-none text-white"  to="/" active-class="active-link">
              <i class="fa-solid fa-users mx-2"></i>
              Customers
            </RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-decoration-none text-white" href="#">
            <RouterLink class="text-decoration-none text-white" to="/products" active-class="active-link">
            <i class="fa-solid fa-box-open mx-2"></i>
              Products
            </RouterLink>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-decoration-none text-white" href="#">
            <RouterLink class="text-decoration-none text-white" to="/orders" active-class="active-link">
              <i class="fa-solid fa-cart-shopping mx-2"></i>
              Orders
            </RouterLink>
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
.my-navbar {
  margin-bottom: 20px; 
}
.active-link {
  font-weight: bold;
  background-color: #055a9c; 
  color: #ffffff; 
  border-radius: 5px;
  padding: 16px 12px; 
}

</style>
