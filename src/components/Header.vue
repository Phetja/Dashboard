<template>
  <header class="bg-white shadow p-4 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <span class="text-xl font-semibold">My Dashboard</span>
    </div>
    <div class="flex items-center space-x-4">
      <DarkModeToggle />
      <button
        @click="logout"
        class="bg-red-500 text-white py-2 px-4 rounded-lg"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue';
export default {
  name: 'HeaderComponent',
  components: {
    DarkModeToggle,
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
  },
};
</script>
