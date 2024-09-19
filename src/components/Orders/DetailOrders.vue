<template>
  <div class="container">
    <form >
      <div class="d-flex justify-content-between">
        <h2> Show Order </h2>
        <div>
          <button type="button" class="btn btn-secondary mx-3" @click="closeDetailComponent">Return to Orders List</button>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input v-model="editOrder.date" type="date" class="form-control" id="date" disabled />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input v-model="editOrder.deliveryAddress" type="text" class="form-control" id="address" disabled />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="customer" class="form-label">Customer Name</label>
          <input v-model="editOrder.customer" type="text" class="form-control" id="customer" disabled />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input v-model="editOrder.trackNumber" type="text" class="form-control" id="trackNumber" disabled />
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-end">
        <div class="col-md-6">
          <label for="status" class="form-label">Order Status</label>
          <select v-model="editOrder.status" class="form-control" id="status" disabled>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    </form>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail, index) in orderDetails" :key="index">
          <td>
            <select class="form-control" v-model="detail.product" disabled>
              <option disabled value="">Select Product</option>
              <option v-for="product in products" :key="product.id" :value="product.name">{{ product.name }}</option>
            </select>
          </td>
          <td>
            <input type="text" class="form-control" v-model="detail.quantity" min="1" disabled/>
          </td>
          <td>
            <input type="number" class="form-control" v-model="detail.price" min="0" disabled />
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref, reactive, defineEmits, defineProps } from "vue";
const props = defineProps({
  order: {
    type: Object,
    required: true
  }
});

const editOrder = ref({ ...props.order });
const emit = defineEmits();

const closeDetailComponent = () => {
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


</script>

<style scoped>
.clr {
  background-color: #044e8f;
}
.container {
  margin-top: 100px;
}
</style>
