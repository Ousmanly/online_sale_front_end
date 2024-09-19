<template>
  <div class="container" >
    <h2 class="fw-3">List of Orders </h2>
    <div class="d-flex justify-content-end">
      <!-- <RouterLink class="text-decoration-none text-white" to="/orders/add"> -->
      <button v-if="isBtnVisible" class="clr btn text-white mt-2 mb-4 fw-bold" @click="openAddComponent">
        Add New Order
      </button>
      <!-- </RouterLink> -->
    </div>
    <AddOrders v-if="isAddComponentVisible" @add-order="addOrder" />
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
              <button class="btn btn-sm" >
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
    
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header d-flex justify-content-between mb-4 border-bottom">
          <h5 class="modal-title mb-4">View order</h5>
          <button type="button" class="btn-close mb-4" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p><strong>Date :</strong> {{ selectedOrder.date }}</p>
          <p><strong>Customer :</strong> {{ selectedOrder.customer }}</p>
          <p><strong>Delivery Address :</strong> {{ selectedOrder.deliveryAddress }}</p>
          <p><strong>Track Number :</strong> {{ selectedOrder.trackNumber }}</p>
          <p><strong>Status :</strong> {{ selectedOrder.status }}</p>
        </div>
        <div class="modal-footer border-top">
          <button type="button" class="btn btn-secondary mt-4" @click="closeModal">Close</button>
        </div>
      </div>
    </div>

 </div>
</template>

<script setup>
import { ref } from "vue";
import AddOrders from "./AddOrders.vue";
// import AddCustomer from './AddCustomers.vue';
// import EditCustomer from "./EditCustomer.vue";

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
// const isEditModalVisible = ref(false);
// const currentOrder = ref(null);

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

const addOrder = (newOrder) => {
  orders.value.push(newOrder);
  isAddComponentVisible.value = false;
  isAddTableVisible.value = true;
  isBtnVisible.value = true;
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
