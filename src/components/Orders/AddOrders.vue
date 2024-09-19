<template>
  <div class="container">
    <form @submit.prevent="submitOrder">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary mx-3" @click="closeAddComponent">Return Orders List</button>
        <button type="submit" class="clr btn text-white">Submit</button>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input v-model="newOrder.date" type="date" class="form-control" id="date" required />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input v-model="newOrder.deliveryAddress" type="text" class="form-control" id="address" required />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="customer" class="form-label">Customer Name</label>
          <input v-model="newOrder.customer" type="text" class="form-control" id="customer" required />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input v-model="newOrder.trackNumber" type="text" class="form-control" id="trackNumber" required />
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-end">
        <div class="col-md-6">
          <label for="status" class="form-label">Order Status</label>
          <select v-model="newOrder.status" class="form-control" id="status" required>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </form>
    <h2 class="mb-3">Order Details</h2>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in orderDetails" :key="index">
          <td>
            <select class="form-select" v-model="detail.product">
              <option disabled value="">Select Product</option>
              <option v-for="product in products" :key="product.id" :value="product.name">{{ product.name }}</option>
            </select>
          </td>
          <td>
            <input type="number" class="form-control" v-model="detail.quantity" min="1" />
          </td>
          <td>
            <input type="number" class="form-control" v-model="detail.price" min="0" />
          </td>
          <td>
            <button class="btn btn-danger" @click="removeDetail(index)">Remove</button>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button class="btn btn-success" @click="addDetail">Add New Detail</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";
const emit = defineEmits(['add-order']); 
const newOrder = ref({
  date: "",
  deliveryAddress: "",
  customer: "",
  trackNumber: "",
  status: "Processing",
});

const submitOrder = () => {
  emit('add-order', { ...newOrder.value });
  
  newOrder.value = {
    date: "",
    deliveryAddress: "",
    customer: "",
    trackNumber: "",
    status: "Processing"
  };
};
const closeAddComponent = () => {
  emit('close'); 
};
const products = reactive([
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' }
]);

const orderDetails = reactive([
  { product: '', quantity: 1, price: 0 }
]);

const addDetail = () => {
  orderDetails.push({ product: '', quantity: 1, price: 0 });
};

const removeDetail = (index) => {
  if (orderDetails.length > 1) {
    orderDetails.splice(index, 1);
  }else{
    alert('At least one item must be present. ')
  }
};


</script>

<style scoped>
.clr {
  background-color: #044e8f;
}
.container {
  margin-top: 100px;
}
</style>
