<template>
  <div style="display: flex; min-height: 100vh;">
    <div class="vertical-nav">
      <div style="display: flex; justify-content: center; padding: 20px; margin-bottom: 50px; margin-top: 15px;">
        <img src="@/assets/logo.png" alt="Logo" style="max-height: 35px; margin-right: 5px;" />
      </div>
      <router-link to="/profile" :class="{ active: $route.path === '/profile' }">
        <img src="@/assets/profileicon.png" alt="Profile Icon" class="icon" />
        Profile
      </router-link>
      <router-link to="/" :class="{ active: $route.path === '/' }">
        <img src="@/assets/dashboardicon.png" alt="Dashboard Icon" class="icon" />
        Dashboard
      </router-link>
      <router-link to="/activity-log" :class="{ active: $route.path === '/activity-log' }">
        <img src="@/assets/actlogicon.png" alt="Actlog Icon" class="icon" />
        Activity Log
      </router-link>
      <router-link to="/notification" :class="{ active: $route.path === '/notification' }">
        <img src="@/assets/notificon.png" alt="Notif Icon" class="icon" />
        Notification
      </router-link>
      <router-link to="/reports" :class="{ active: $route.path === '/reports' }">
        <img src="@/assets/reportsicon.png" alt="Reports Icon" class="icon" />
        Reports
      </router-link>
      </div>
    <div style="flex-grow: 1; padding: 20px;">
      <router-view />
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.vertical-nav {
  width: 200px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.vertical-nav a {
  padding: 20px 15px;
  text-decoration: none;
  color: black;
  border-bottom: none solid #ddd;
  display: flex;
  align-items: center;
  font-size: 12px;
}

.vertical-nav a:last-child {
  border-bottom: none;
}

.vertical-nav a.router-link-active {
  background-color: #e0e0e0;
  font-weight: bold;
}

.vertical-nav a.active {
  background-color: #FFC500;
}

.icon {
  max-height: 16px;
  margin-right: 8px;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
</script>