<template>
  <div class="dashboard">
    <div class="header">
      <h1 style="margin-bottom: 0px; margin-top: 0px;">Hello there, Powerpuff!</h1>
    </div>
    <hr style="border: 1px solid #eee; margin-bottom: 5px;">
    <div style="display: flex; justify-content: space-around; background-color: #f9f9f9; padding: 20px; border-radius: 4px;">
      <div style="display: flex; align-items: center;">
        <img src="@/assets/footcount-icon.png" alt="Total Foot Count Icon" style="max-height: 50px; margin-right: 10px;">
        <div>
          <p style="margin: 0; font-weight: bold;">Total Foot Count</p>
          <p style="margin: 0;font-weight: bold;">5,423</p>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <img src="@/assets/newvio-icon.png" alt="New Violation Icon" style="max-height: 50px; margin-right: 10px;">
        <div>
          <p style="margin: 0; font-weight: bold;">New Violations</p>
          <p style="margin: 0;font-weight: bold;">1,893</p>
        </div>
      </div>
      <div style="display: flex; align-items: center;">
        <img src="@/assets/unsettled-icon.png" alt="Unsettled Violation Icon" style="max-height: 50px; margin-right: 10px;">
        <div>
          <p style="margin: 0; font-weight: bold;">Unsettled Violations</p>
          <p style="margin: 0;font-weight: bold;">189</p>
        </div>
      </div>
    </div>

    <div class="student-violations">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h2>Student Violations</h2>
        <div style="display: flex; align-items: center;">
          <input type="text" placeholder="Search Name" class="search-input" v-model="searchQuery" style="margin-right: 10px;">
          <select v-model="filterStatus" style="margin-right: 10px;">
            <option value="">All Statuses</option>
            <option value="Settled">Settled</option>
            <option value="Unsettled">Unsettled</option>
          </select>
          <select v-model="filterViolation" style="margin-right: 10px;">
            <option value="">All Violations</option>
            <option value="Improper Civilian">Improper Civilian</option>
            <option value="Missing ID">Missing ID</option>
            <option value="Improper Uniform">Improper Uniform</option>
          </select>
          <select v-model="sortBy">
            <option value="">Filter Category</option>
            <option value="dateDesc">Newest</option>
            <option value="dateAsc">Oldest</option>
            <option value="nameAsc">Name</option>
            <option value="studentId">Student ID</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Email</th>
            <th>Violation</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.studentId">
            <td style="font-size: 12px;">{{ student.studentName }}</td>
            <td style="font-size: 12px;">{{ student.studentId }}</td>
            <td style="font-size: 12px;">{{ student.email }}</td>
            <td style="font-size: 12px;">{{ student.violation }}</td>
            <td style="font-size: 12px;">{{ student.date }}</td>
            <td :class="['status', student.status.toLowerCase()]" style="font-size: 12px;">{{ student.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { studentName: 'Christine Joy Manuel', studentId: '211187', email: 'mcjmanuel1@tip.edu.ph', violation: 'Improper Civilian', date: '03/11/2025', status: 'Settled' },
        { studentName: 'Erica Joy Miranda', studentId: '2111890', email: 'mejmiranda@tip.edu.ph', violation: 'Missing ID', date: '03/10/2025', status: 'Unsettled' },
        { studentName: 'Hans Stephen Lumasang', studentId: '2112260', email: 'mhslumasang@tip.edu.ph', violation: 'Improper Uniform', date: '03/07/2025', status: 'Unsettled' },
        { studentName: 'Jhon Mathew Ramos', studentId: '2112393', email: 'mjmramos@tip.edu.ph', violation: 'Improper Civilian', date: '03/06/2025', status: 'Settled' },
        { studentName: 'Vonn Amiel Garcia', studentId: '2113118', email: 'mvagarcia@tip.edu.ph', violation: 'Missing ID', date: '03/05/2025', status: 'Settled' },
        { studentName: 'Vanessa Fevin Sarabia', studentId: '2117890', email: 'mvfsarabia@tip.edu.ph', violation: 'Improper Uniform', date: '03/05/2025', status: 'Settled' },
        { studentName: 'John Harvey Obispo', studentId: '2112345', email: 'mjhobispo@tip.edu.ph', violation: 'Improper Civilian', date: '03/03/2025', status: 'Settled' },
        { studentName: 'Teodoro Monteclaro I', studentId: '2111311', email: 'mtmonteclaroi@tip.edu.ph', violation: 'Improper Civilian', date: '03/03/2024', status: 'Settled' },
      ],
      searchQuery: '',
      filterStatus: '',
      filterViolation: '',
      sortBy: 'dateDesc', // Default sort by date descending
    };
  },
  computed: {
    filteredStudents() {
      let filtered = this.students.filter(student =>
        student.studentName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.filterStatus) {
        filtered = filtered.filter(student => student.status === this.filterStatus);
      }

      if (this.filterViolation) {
        filtered = filtered.filter(student => student.violation === this.filterViolation);
      }

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
.dashboard {
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
}

.data-boxes {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.data-box {
  display: flex;
  align-items: center;
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.icon-circle img {
  max-height: 30px;
}

.data-text p {
  margin: 0;
}

.data-text p:last-child {
  font-weight: bold;
}

.student-violations {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.status {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
}

.status.settled {
  background-color: #e0f7e9;
  color: #43a047;
}

.status.unsettled {
  background-color: #ffe0b2;
  color: #f57c00;
}
</style>