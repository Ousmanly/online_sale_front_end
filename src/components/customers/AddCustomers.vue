<template>
  <div class="modal-overlay" @click="closeAddModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header d-flex justify-content-between mb-4">
        <h5 class="modal-title">Ajouter un nouveau client</h5>
        <button type="button" class="btn-close" @click="closeAddModal"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitCustomer">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" id="name" class="form-control" v-model="newCustomer.name" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Adresse</label>
            <input type="text" id="address" class="form-control" v-model="newCustomer.address" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" v-model="newCustomer.email" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Téléphone</label>
            <input type="text" id="phone" class="form-control" v-model="newCustomer.phone" required />
          </div>
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeAddModal">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const newCustomer = ref({
  name: '',
  address: '',
  email: '',
  phone: ''
});

const closeAddModal = () => {
  emit('close'); 
};

// Fonction pour soumettre le formulaire
const submitCustomer = () => {
  emit('addCustomer', { ...newCustomer.value });
  closeAddModal();
};
</script>

<style scoped>
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
