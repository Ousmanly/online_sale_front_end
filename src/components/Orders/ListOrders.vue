<template>
  <div class="container" >
    <h2 class="fw-3">List of Orders </h2>
    <div class="d-flex justify-content-end"> 
      <button v-if="isBtnVisible" class="clr btn text-white mt-2 mb-4 fw-bold" @click="openAddComponent">
        Add New Order
      </button>
    </div>
    <AddOrders v-if="isAddComponentVisible" @add-order="addOrder" 
    @close="closeAddComponent" />
    <EditOrders
      v-if="isEditModalVisible"
      :order="currentOrder"
      @editOrder="updateOrder"
      @close="closeEditComponent"
    />
    <div class="table-responsive" v-if="isAddTableVisible">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-primary">
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Delivery Address</th>
            <th>Tracck Number</th>
            <th>Status</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>{{ order.trackNumber }}</td>
            <td>{{ order.status }}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(order)">
                <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 17px"></i>
              </button>
              <button class="btn btn-sm" @click="openEditComponent(order)" >
                <i class="fa-solid fa-pen-to-square" style="color:#f2c127; font-size: 17px"></i>
              </button>
              <button class="btn btn-sm" @click="destroyOrder(order.id)">
                <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 17px"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
  <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header d-flex justify-content-between mb-4 border-bottom">
        <h5 class="modal-title mb-4">View order</h5>
        <button type="button" class="btn-close mb-4" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        <form >
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input  type="date" class="form-control" id="date" :value="selectedOrder.date" disabled />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input  type="text" class="form-control" id="address" :value="selectedOrder.deliveryAddress" disabled />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-6">
          <label for="customer" class="form-label">Customer Name</label>
          <input  type="text" class="form-control" id="customer" :value="selectedOrder.customer" disabled />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Track Number</label>
          <input  type="text" class="form-control" id="trackNumber" :value="selectedOrder.trackNumber" disabled/>
        </div>
      </div>

      <div class="row mb-3 d-flex justify-content-end">
        <div class="col-md-6">
          <label for="status" class="form-label">Order Status</label>
          <select  class="form-control" id="status" :value="selectedOrder.status" disabled>
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" class="form-control"  value="ProductA" disabled/>
          </td>
          <td>
            <input type="text" class="form-control"  value="1" disabled/>
          </td>
          <td>
            <input type="text" class="form-control"  value="0" disabled />
          </td>
        </tr>
      </tbody>
    </table>
      </div>
      <div class="modal-footer border-top">
        <button type="button" class="btn btn-secondary mt-4" @click="closeModal">Close</button>
      </div>
    </div>

 </div>
</template>

<script setup>
import { ref } from "vue";
import AddOrders from "./AddOrders.vue";
import EditOrders from "./EditOrders.vue";

const orders = ref([
  {
    id:1,
    date: "25/07/2024",
    customer: "John Doe",
    deliveryAddress: "123 Main St, New York, NY",
    trackNumber: "	TN001",
    status: "Shipped"
  },
  {
    id: 2,
    date: "26/07/2024",
    customer: "Jane Smith",
    deliveryAddress: "456 Oak St, Los Angeles, CA",
    trackNumber: "TN002",
    status: "Processing"
  },
  {
    id: 3,
    date: "27/07/2024",
    customer: "Michael Brown",
    deliveryAddress: "789 Pine St, Chicago, IL",
    trackNumber: "TN003",
    status: "Delivered"
  }
]);

const isModalVisible = ref(false);
const selectedOrder = ref(null);
const isAddComponentVisible = ref(false);
const isAddTableVisible = ref(true);
const isBtnVisible = ref(true);
const isEditModalVisible = ref(false);
const currentOrder = ref(null);

const openModal = (customer) => {
  selectedOrder.value = customer;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const openAddComponent = () => {
  isAddComponentVisible.value = true;
  isAddTableVisible.value = false;
  isBtnVisible.value = false;
};
const closeAddComponent = () =>{
  isAddComponentVisible.value = false;
  isAddTableVisible.value = true;
  isBtnVisible.value = true;
}
const addOrder = (newOrder) => {
  orders.value.push(newOrder);
  isAddComponentVisible.value = false;
  isAddTableVisible.value = true;
  isBtnVisible.value = true;
};
const openEditComponent = (order) => {
  currentOrder.value = order; 
  isEditModalVisible.value = true; 
  isAddTableVisible.value = false;
  isBtnVisible.value = false;
};
const closeEditComponent = () =>{
  isEditModalVisible.value = false; 
  isAddTableVisible.value = true;
  isBtnVisible.value = true;
}
const updateOrder = (updatedOrder) => {
  const index = orders.value.findIndex(c => c.id === updatedOrder.id);
  if (index !== -1) {
    orders.value[index] = updatedOrder; 
    isEditModalVisible.value = false; 
    isAddTableVisible.value = true;
    isBtnVisible.value = true;
  }
};
const destroyOrder = (id) => {
  const confirmed = window.confirm("Are you sure to delete this order ?");
  
  if (confirmed) {
    orders.value = orders.value.filter(order => order.id !== id);
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
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  max-height: 540px;
  position: relative;
  overflow-y: auto; 
}

.modal-header {
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
