<template>
  <div class="container">
    <h2 class="fw-3">List of Products </h2>
    <div class="d-flex justify-content-end">
      <button class="clr btn text-white mt-2 mb-4 fw-bold" @click="openAddModal">
        Add New Product
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-primary">
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Sock</th>
            <th>Category</th>
            <th>Barcode</th>
            <th>Status</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <!-- <td>{{ customer.name }}</td> -->
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock}}</td>
            <td>{{ product.category}}</td>
            <td>{{ product.barcode}}</td>
            <td>{{ product.status}}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(product)">
                <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 17px"></i>
              </button>
              <button class="btn btn-sm" @click="openEditModal(product)">
                <i class="fa-solid fa-pen-to-square" style="color:#f2c127; font-size: 17px"></i>
              </button>
              <button class="btn btn-sm" @click="destroyProduct(product.id)">
                <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 17px"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header d-flex justify-content-between mb-4 border-bottom">
          <h5 class="modal-title mb-4">View customer</h5>
          <button type="button" class="btn-close mb-4" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p><strong>Nom :</strong> {{ selectedProduct.name }}</p>
          <p><strong>Description :</strong> {{ selectedProduct.description }}</p>
          <p><strong>Category :</strong> {{ selectedProduct.category }}</p>
          <p><strong>Price :</strong> {{ selectedProduct.price }}</p>
          <p><strong>Stock :</strong> {{ selectedProduct.stock }}</p>
          <p><strong>Barcode :</strong> {{ selectedProduct.barcode }}</p>
          <p><strong>Status :</strong> {{ selectedProduct.status }}</p>
        </div>
        <div class="modal-footer border-top">
          <button type="button" class="btn btn-secondary mt-4" @click="closeModal">Fermer</button>
        </div>
      </div>
    </div>

    <AddProduct v-if="isAddModalVisible" @close="closeAddModal" @addProduct="addProduct" />
    <EditProduct
      v-if="isEditModalVisible"
      :product="currentProduct"
      @close="closeEditModal"
      @editProduct="updateProduct"
    />
 </div>
</template>

<script setup>
import { ref } from "vue";
import AddProduct from "./AddProducts.vue";
import EditProduct from "./EditProduct.vue";

const products = ref([
  {
    id:1,
    name: "Product 001",
    description: "High-quality product.",
    price: 100,
    stock: 50,
    category: "Electronics",
    barcode: "123456789012",
    status: "Active",
  },
  {
    id: 2,
    name: "Product 002",
    description: "Affordable and durable.",
    price: 50,
    stock: 100,
    category: "Home Appliances",
    barcode: "234567890123",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Product 003",
    description: "Innovative and high-tech.",
    price: 200,
    stock: 30,
    category: "Gadgets",
    barcode: "345678901234",
    status: "Active",
  }
]);

const isModalVisible = ref(false);
const selectedProduct = ref(null);
const isAddModalVisible = ref(false);
const isEditModalVisible = ref(false);
const currentProduct = ref(null);

const openModal = (product) => {
  selectedProduct.value = product;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const openAddModal = () => {
  isAddModalVisible.value = true;
};

const closeAddModal = () => {
  isAddModalVisible.value = false;
};
const addProduct = (newProduct) => {
  const maxId = Math.max(...products.value.map(product => product.id));

  newProduct.id = maxId + 1;
  products.value.push(newProduct);
};


const openEditModal = (product) => {
  currentProduct.value = product; 
  isEditModalVisible.value = true; 
};

const closeEditModal = () => {
  isEditModalVisible.value = false;
};

const updateProduct = (updatedProduct) => {
  const index = products.value.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products.value[index] = updatedProduct;
  }
};
const destroyProduct = (id) => {
  const confirmed = window.confirm("Are you sure to delete this Product ?");
  
  if (confirmed) {
    products.value = products.value.filter(product => product.id !== id);
  }
};


</script>

<style scoped>
.clr {
  background-color: #044e8f;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
}

.modal-body .modal-header {
  padding: 20px;
}
.table td, .table th {
  padding: 4px 8px;
  height: 40px;
}
.container{
  margin-top: 70px;
}
</style>
