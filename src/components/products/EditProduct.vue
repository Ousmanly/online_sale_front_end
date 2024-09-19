<template>
  <div class="modal-overlay" @click="closeAddModal">
  <div class="modal-content" @click.stop>
    <div class="modal-header d-flex justify-content-between mb-4 border-bottom">
      <h5 class="modal-title mb-3">Edit Product</h5>
      <button type="button" class="btn-close mb-3" @click="closeEditModal"></button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="submitEdit">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="name" class="form-label">Product Name</label>
            <input type="text" id="name" class="form-control" v-model="editProduct.name" required />
          </div>
          <div class="col-md-6 mb-3">
            <label for="category" class="form-label">Category</label>
            <input type="text" id="category" class="form-control" v-model="editProduct.category" required />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" id="price" class="form-control" step="0.01" min="0" v-model="editProduct.price" required />
          </div>
          <div class="col-md-6 mb-3">
            <label for="stock" class="form-label">Stock Quantity</label>
            <input type="number" id="stock" class="form-control" min="0" v-model="editProduct.stock" required />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="barcode" class="form-label">Barcode</label>
            <input type="text" id="barcode" class="form-control" v-model="editProduct.barcode" required />
          </div>
          <div class="col-md-6 mb-3">
            <label for="status" class="form-label">Status</label>
            <select name="status" id="status" class="form-control" v-model="editProduct.status" >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" class="form-control" v-model="editProduct.description" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-end border-top">
          <button type="button" class="btn btn-secondary mx-2 mt-4" @click="closeEditModal">Close</button>
          <button type="submit" class="clr btn text-white mt-4">Confirm</button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const editProduct = ref({ ...props.product });
const emit = defineEmits();

const closeEditModal = () => {
  emit('close'); 
};

const submitEdit = () => {
  emit('editProduct', { ...editProduct.value }); 
  closeEditModal(); 
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
  max-height: 550px;
  width: 100%;
  position: relative;
}

.modal-body .modal-header {
  padding: 20px;
}
</style>
