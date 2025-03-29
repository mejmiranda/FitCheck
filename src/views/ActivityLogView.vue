<template>
<div class="activity-log">
    <div class="header">
      <h1 style="margin-bottom: 0px; margin-top: 0px;">Hello there, Powerpuff!</h1>
    </div>
    <hr style="border: 1px solid #eee; margin-bottom: 5px;">
    <div style="display: flex; justify-content: space-around; background-color: #f9f9f9; padding: 20px; border-radius: 4px;">
      <div style="display: flex; align-items: center;">
        <img src="@/assets/footcount-icon.png" alt="Total Foot Count Icon" style="max-height: 50px; margin-right: 15px;">
        <div>
          <p style="margin: 0; font-weight: bold;">Total Foot Count</p>
          <p style="margin: 0;font-weight: bold;">5,423</p>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <img src="@/assets/newvio-icon.png" alt="New Violation Icon" style="max-height: 50px; margin-right: 15px;">
        <div>
          <p style="margin: 0; font-weight: bold;">New Violations</p>
          <p style="margin: 0;font-weight: bold;">1,893</p>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <img src="@/assets/unsettled-icon.png" alt="Unsettled Violation Icon" style="max-height: 50px; margin-right: 15px;">
        <div>
          <p style="margin: 0; font-weight: bold;">Unsettled Violations</p>
          <p style="margin: 0;font-weight: bold;">189</p>
        </div>
      </div>
    </div>

    <div class="activity-log">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
      <h2>Activity Log</h2>
      <div class="search-sort">
        <input type="text" placeholder="Search Name" v-model="searchQuery" class="search-input" />
      </div>
    </div>
    </div>

    <div class="tabs">
      <button :class="{ active: activeTab === 'settled' }" @click="activeTab = 'settled'">Settled Violations</button>
      <button :class="{ active: activeTab === 'unsettled' }" @click="activeTab = 'unsettled'">Unsettled Violations</button>
      <select class="filter-category">
          <option value="">Filter Category</option>
          <option value="dateDesc">Newest</option>
          <option value="dateAsc">Oldest</option>
          <option value="nameAsc">Name</option>
          <option value="studentId">Student ID</option>
        </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Violation</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudents" :key="student.studentId">
          <td>{{ student.studentName }}</td>
          <td>{{ student.studentId }}</td>
          <td>{{ student.violation }}</td>
          <td>{{ student.date }}</td>
          <td><button class="view-details-button">View Details</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'settled',
      students: [
        { studentName: 'Christine Joy Manuel', studentId: '211187', email: 'mcjmanuel1@tip.edu.ph', violation: 'Improper Civilian', date: '03/11/2025', status: 'Settled' },
        { studentName: 'Erica Joy Miranda', studentId: '2111890', email: 'mejmiranda@tip.edu.ph', violation: 'Missing ID', date: '03/10/2025', status: 'Unsettled' },
        { studentName: 'Hans Stephen Lumasang', studentId: '2112260', email: 'mhslumasang@tip.edu.ph', violation: 'Improper Uniform', date: '03/07/2025', status: 'Unsettled' },
        { studentName: 'Jhon Mathew Ramos', studentId: '2112393', email: 'mjmramos@tip.edu.ph', violation: 'Improper Civilian', date: '03/06/2025', status: 'Settled' },
        // ... (rest of your student data) ...
      ],
      searchQuery: '',
      sortBy: 'dateDesc',
    };
  },
  computed: {
    filteredStudents() {
      let filtered = this.students.filter(student => {
        if (this.activeTab === 'settled') {
          return student.status === 'Settled' && student.studentName.toLowerCase().includes(this.searchQuery.toLowerCase());
        } else {
          return student.status === 'Unsettled' && student.studentName.toLowerCase().includes(this.searchQuery.toLowerCase());
        }
      });

      const sorted = [...filtered];

      sorted.sort((a, b) => {
        switch (this.sortBy) {
          case 'nameAsc':
            return a.studentName.localeCompare(b.studentName);
          case 'nameDesc':
            return b.studentName.localeCompare(a.studentName);
          case 'studentId':
            return String(a.studentId).localeCompare(String(b.studentId));
          case 'email':
            return a.email.localeCompare(b.email);
          case 'dateAsc':
            return new Date(a.date) - new Date(b.date);
          case 'dateDesc':
          default:
            return new Date(b.date) - new Date(a.date);
        }
      });
      return sorted;
    },
  },
};
</script>

<style scoped>
.activity-log {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-sort {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 10px;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  background-color: #f9f9f9;
}

.tabs button.active {
  background-color: #FFC500;
  color: rgb(0, 0, 0);
}

.filter-category {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.view-details-button {
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  padding: 0;
}
</style>