<template>
  <div class="profile-container">
    <div class="profile-header">
      <img src="@/assets/profilepic.jpg" alt="Profile Picture" class="profile-picture">
      <div class="profile-info">
        <h1>{{ profileData.name }}</h1>
        <p class="position">{{ profileData.position }}</p>
        <p><strong>Email:</strong> {{ profileData.email }}</p>
        <p><strong>Employee Number:</strong> {{ profileData.employeeNumber }}</p>
        <p><strong>Institution:</strong> {{ profileData.institution }}</p>
        <button class="edit-button" @click="isEditing = true">Edit Profile</button>
      </div>
    </div>

    <div v-if="isEditing" class="edit-profile-modal">
      <div class="modal-content">
        <h2>Edit Profile</h2>
        <form @submit.prevent="saveProfile">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="editableProfile.name">
          </div>
          <div class="form-group">
            <label for="position">Position:</label>
            <input type="text" id="position" v-model="editableProfile.position">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="editableProfile.email">
          </div>
          <div class="form-group">
            <label for="employeeNumber">Employee Number:</label>
            <input type="text" id="employeeNumber" v-model="editableProfile.employeeNumber">
          </div>
          <div class="modal-actions">
            <button type="submit" class="save-button">Save Changes</button>
            <button type="button" class="cancel-button" @click="isEditing = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const profileData = ref({
      name: 'Powerpuff User',
      position: 'Administrator',
      email: 'powerpuff@tip.edu.ph',
      employeeNumber: 'EMP-001',
      institution: 'Technological Institute of the Philippines Manila',
    });

    const isEditing = ref(false);
    const editableProfile = ref({ ...profileData.value });

    const saveProfile = () => {
      profileData.value = { ...editableProfile.value };
      isEditing.value = false;
      // In a real application, you would send this data to your backend
      console.log('Profile saved:', profileData.value);
    };

    return {
      profileData,
      isEditing,
      editableProfile,
      saveProfile,
    };
  },
};
</script>

<style scoped>
.profile-container {
  font-family: sans-serif;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  max-width: 800px;
  /* Removed margin: 20px auto; to align left */
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding: 30px;
  border-radius: 4px;
  /* Removed the border */
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ddd;
  flex-shrink: 0;
}

.profile-info {
  flex-grow: 1;
}

.profile-info h1 {
  margin-top: 0;
  color: #333;
  margin-bottom: 10px;
  font-size: 2em;
}

.profile-info .position {
  color: #777;
  font-size: 1.1em;
  margin-bottom: 15px;
}

.profile-info p {
  margin: 8px 0;
  color: #555;
  font-size: 1em;
}

.edit-button {
  background-color: #ffc107;
  color: black;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.edit-button:hover {
  background-color: #ffc107;
}

/* Edit Profile Modal */
.edit-profile-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
}

.modal-content h2 {
  margin-top: 0;
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5em;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: bold;
  font-size: 1.1em;
}

.form-group input[type="text"],
.form-group input[type="email"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1.1em;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
}

.save-button {
  background-color: #ffc107;
  color: black;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #ffc107;
}

.cancel-button {
  background-color: #ffc107;
  color: black;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.cancel-button:hover {
  background-color: #ffc107;
}
</style>