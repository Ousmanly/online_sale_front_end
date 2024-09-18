<template>
  <div class="modal-overlay" @click="closeEditModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header d-flex justify-content-between mb-4 border-bottom">
        <h5 class="modal-title mb-4">Edit customer</h5>
        <button type="button mb-4" class="btn-close" @click="closeEditModal"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitEdit">
          <div class="mb-3">
            <label for="name" class="form-label">Customer Name</label>
            <input type="text" id="name" class="form-control" v-model="editCustomer.name" required />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Adresse</label>
            <input type="text" id="address" class="form-control" v-model="editCustomer.address" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" v-model="editCustomer.email" required />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Téléphone</label>
            <input type="text" id="phone" class="form-control" v-model="editCustomer.phone" required />
          </div>
          <!-- <button type="submit" class="btn btn-primary">Enregistrer</button> -->
          <div class="d-flex justify-content-end border-top">
            <button type="button" class="btn btn-secondary mx-2 mt-4" @click="closeEditModal">Close</button>
            <button type="submit" class="clr btn text-white mt-4">Confirm</button>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" @click="closeEditModal">Fermer</button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
  customer: {
    type: Object,
    required: true
  }
});

const editCustomer = ref({ ...props.customer });

// Mettre à jour les informations si le client change
// watch(() => props.customer, (newCustomer) => {
//   editCustomer.value = { ...newCustomer };
// });

const emit = defineEmits();

// Fonction pour fermer le modal
const closeEditModal = () => {
  emit('close'); // Émettre l'événement de fermeture
};

// Fonction pour soumettre la modification
const submitEdit = () => {
  emit('editCustomer', { ...editCustomer.value }); // Émettre l'événement de modification
  closeEditModal(); // Fermer le modal après soumission
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
</style>
