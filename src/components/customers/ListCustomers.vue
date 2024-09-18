<template>
  <div class="container">
    <h2 class="fw-3">List of Customers</h2>
    <!-- <RouterLink class="list text-decoration-none text-white me-5 fw-bold"  to="/ajoutlist"> -->
    <button class="clr btn text-white mt-2 mb-4 fw-bold">
      Add new customer
    </button>
    <!-- <button class="clr btn text-white mt-5 mb-4 fw-bold"  v-if="affichebtn" @click="maskBtn">
       Ajouter une tache
    </button> -->
    <!-- </RouterLink>  -->
    <div class="table-responsive">
      <table class="table table-striped table-bordered border-black">
        <thead class="table-success">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.Email }}</td>
            <td>{{ customer.Phone }}</td>
            <td class="text-center">
              <button class="btn btn-sm" @click="openModal(tache)">
                <i
                  class="fa-solid fa-eye"
                  style="color: #4596d3; font-size: 25px"
                ></i>
              </button>
              <!-- <RouterLink :to="{ path: `/modifietache/${tache.id}` }"> -->
              <button class="btn btn-sm">
                <i
                  class="fa-solid fa-pen-to-square"
                  style="color: #1ac163; font-size: 25px"
                ></i>
              </button>
              <!-- </RouterLink> -->
              <button class="btn btn-sm" @click="destroyTache(tache.id)">
                <i
                  class="fa-solid fa-trash"
                  style="color: #e30d0d; font-size: 25px"
                ></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-body">
          <h3>Détails de la Tâche</h3>
          <p><strong>Nom :</strong> {{ selectedTache.nom }}</p>
          <p><strong>Description :</strong> {{ selectedTache.description }}</p>
          <p><strong>Date de début :</strong> {{ selectedTache.date_debut }}</p>
          <p><strong>Date de fin :</strong> {{ selectedTache.date_fin }}</p>
          <p><strong>Projet :</strong> {{ selectedTache.projet }}</p>
        </div>
        <button class="btn btn-danger" @click="closeModal">Fermer</button>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const customers = ref([
  { name: "Alice Smith", address: "456 Oak Ave, Los Angeles, CA", Email: "alice@example.com", Phone: "987-654-3210" },
  { name: "Bob Johnson", address: "789 Pine St, Chicago, IL", Email: "bob.johnson@example.com", Phone: "555-123-4567" },
  { name: "Charlie Brown", address: "321 Maple Dr, Houston, TX", Email: "charlie.b@example.com", Phone: "222-333-4444" },
  { name: "Diana Prince", address: "987 Cedar Ln, Miami, FL", Email: "diana.p@example.com", Phone: "111-222-3333" },
  { name: "Eve Adams", address: "654 Willow St, San Francisco, CA", Email: "eve.adams@example.com", Phone: "888-999-7777" }
]);

// const store = useGestionStore();
// let affichebtn = true;
// const maskBtn = () => {
//   affichebtn = false;
// }
// const isModalVisible = ref(false);
// const selectedTache = ref(null);

// const openModal = (tache) => {
//   selectedTache.value = tache;
//   isModalVisible.value = true;
// };

// const closeModal = () => {
//   isModalVisible.value = false;
// };

// const destroyTache = (id) => {
//   store.deleteTache(id);
// };
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

.modal-body {
  padding: 20px;
}
</style>
