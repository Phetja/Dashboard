export default {
  isAuthenticated: false, // This should be dynamically managed in a real app

  login() {
    this.isAuthenticated = true;
  },

  logout() {
    this.isAuthenticated = false;
  },

  checkAuth() {
    return this.isAuthenticated;
  },
};
