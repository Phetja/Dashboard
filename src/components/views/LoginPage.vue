<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6">Login</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger mt-3">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        // Dummy validation
        if (this.username === 'admin' && this.password === 'admin') {
          // alert('Login successful!');
          this.$router.push({
            name: 'Home',
            path: '/home',
            component: HomePage,
          });
          // You can redirect to another page or perform other actions here
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      }
    },
    validateForm() {
      this.errorMessage = '';

      if (!this.username || !this.password) {
        this.errorMessage = 'Username and password are required.';
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-title {
  margin-bottom: 20px;
}

.alert {
  font-size: 14px;
}
</style>
