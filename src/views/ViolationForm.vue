<template>
    <form @submit.prevent="submitViolation" class="p-4 max-w-md mx-auto shadow rounded bg-white">
      <h2 class="text-xl font-bold mb-4">Record a Violation</h2>
  
      <label class="block mb-2">
        Student Name:
        <input v-model="form.studentName" type="text" class="w-full p-2 border rounded" required />
      </label>
  
      <label class="block mb-2">
        Student ID:
        <input v-model="form.studentId" type="text" class="w-full p-2 border rounded" required />
      </label>
  
      <label class="block mb-2">
        Violation:
        <input v-model="form.violation" type="text" class="w-full p-2 border rounded" required />
      </label>
  
      <label class="block mb-2">
        Frequency:
        <input v-model.number="form.frequency" type="number" class="w-full p-2 border rounded" required />
      </label>
  
      <label class="block mb-4">
        Status:
        <select v-model="form.status" class="w-full p-2 border rounded">
          <option value="Pending">Pending</option>
          <option value="Settled">Settled</option>
        </select>
      </label>
  
      <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { db } from './firebase';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  
  const form = ref({
    studentName: '',
    studentId: '',
    violation: '',
    frequency: 1,
    status: 'Pending',
  });
  
  const submitViolation = async () => {
    try {
      await addDoc(collection(db, "violations"), {
        studentName: form.value.studentName,
        studentId: form.value.studentId,
        violation: form.value.violation,
        frequency: form.value.frequency,
        status: form.value.status,
        dateRecorded: serverTimestamp(),
        dateSettled: form.value.status === "Settled" ? serverTimestamp() : null,
      });
  
      alert("Violation submitted!");
      // Reset the form
      form.value = {
        studentName: '',
        studentId: '',
        violation: '',
        frequency: 1,
        status: 'Pending',
      };
    } catch (err) {
      console.error("Error submitting violation:", err);
      alert("Error submitting violation.");
    }
  };
  </script>
  
  <style scoped>
  input, select {
    margin-top: 0.25rem;
  }
  </style>