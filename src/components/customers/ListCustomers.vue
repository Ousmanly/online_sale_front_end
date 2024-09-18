<template>
  <div class="container">
    <h2 class="fw-3">Liste des Clients</h2>
    <div class="d-flex justify-content-end">
      <button class="clr btn text-white mt-2 mb-4 fw-bold" @click="openAddModal">
        Ajouter un nouveau client
      </button>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-success">
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(customer)">
                <i class="fa-solid fa-eye" style="color: #4596d3; font-size: 25px"></i>
              </button>
              <button class="btn btn-sm">
                <i class="fa-solid fa-pen-to-square" style="color: #1ac163; font-size: 25px"></i>
              </button>
              <button class="btn btn-sm" @click="destroyTache(customer.id)">
                <i class="fa-solid fa-trash" style="color: #e30d0d; font-size: 25px"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header d-flex justify-content-between mb-4">
          <h5 class="modal-title">Voir le client</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <p><strong>Nom :</strong> {{ selectedCustomer.name }}</p>
          <p><strong>Adresse :</strong> {{ selectedCustomer.address }}</p>
          <p><strong>Email :</strong> {{ selectedCustomer.email }}</p>
          <p><strong>Téléphone :</strong> {{ selectedCustomer.phone }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Fermer</button>
        </div>
      </div>
    </div>

    <AddCustomer v-if="isAddModalVisible" @close="closeAddModal" @addCustomer="addCustomer" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddCustomer from './AddCustomers.vue';

const customers = ref([
  {
    name: "Alice Smith",
    address: "456 Oak Ave, Los Angeles, CA",
    email: "alice@example.com",
    phone: "987-654-3210",
  },
  {
    name: "Bob Johnson",
    address: "789 Pine St, Chicago, IL",
    email: "bob.johnson@example.com",
    phone: "555-123-4567",
  },
  {
    name: "Charlie Brown",
    address: "321 Maple Dr, Houston, TX",
    email: "charlie.b@example.com",
    phone: "222-333-4444",
  },
  {
    name: "Diana Prince",
    address: "987 Cedar Ln, Miami, FL",
    email: "diana.p@example.com",
    phone: "111-222-3333",
  },
  {
    name: "Eve Adams",
    address: "654 Willow St, San Francisco, CA",
    email: "eve.adams@example.com",
    phone: "888-999-7777",
  },
  {
    name: "Frank White",
    address: "123 Birch Rd, Boston, MA",
    email: "frank.white@example.com",
    phone: "333-444-5555",
  },
  {
    name: "Grace Lee",
    address: "789 Spruce St, Denver, CO",
    email: "grace.lee@example.com",
    phone: "666-777-8888",
  },
  {
    name: "Henry Ford",
    address: "159 Elm St, Seattle, WA",
    email: "henry.ford@example.com",
    phone: "999-888-7777",
  },
  {
    name: "Ivy Nguyen",
    address: "753 Aspen Ln, Austin, TX",
    email: "ivy.nguyen@example.com",
    phone: "444-555-6666",
  },
  {
    name: "Jack Black",
    address: "963 Cedar Blvd, Orlando, FL",
    email: "jack.black@example.com",
    phone: "222-111-0000",
  },
]);

const isModalVisible = ref(false);
const selectedCustomer = ref(null);
const isAddModalVisible = ref(false);

const openModal = (customer) => {
  selectedCustomer.value = customer;
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

const addCustomer = (newCustomer) => {
  customers.value.push(newCustomer);
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
</style>
