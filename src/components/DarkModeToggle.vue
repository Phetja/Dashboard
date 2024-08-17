<template>
  <div class="flex items-center justify-center">
    <button
      class="bg-gray-200 dark:bg-gray-800 rounded-full p-2 transition-colors duration-300"
      @click="toggleDarkMode"
    >
      <span class="sr-only">Toggle Dark Mode</span>
      <svg
        v-if="isDarkMode"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M12 3v1M12 21v1M4.22 4.22l.707.707M19.071 19.071l.707.707M1 12h1M22 12h1M4.22 19.78l.707-.707M19.071 4.929l.707-.707"
        />
        <circle cx="12" cy="12" r="5" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-900 dark:text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 1010.79 9.79z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'DarkModeToggle',
  setup() {
    const isDarkMode = ref(false);

    onMounted(() => {
      // Check localStorage for theme preference
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        isDarkMode.value = true;
      }
    });

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style scoped>
button {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

svg {
  width: 20px;
  height: 20px;
  transition: color 0.3s ease;
}
</style>
