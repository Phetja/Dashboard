<template>
  <aside
    :class="isCollapsed ? 'w-20' : 'w-50'"
    class="bg-gray-800 text-white flex flex-col h-screen"
  >
    <div class="p-4">
      <button
        @click="$emit('toggleSidebar')"
        class="w-full bg-gray-600 rounded-lg hover:bg-gray-500"
      >
        <i
          :class="isCollapsed ? 'fa-solid fa-bars' : 'fa-solid fa-angles-left'"
        ></i>
      </button>
    </div>
    <nav class="flex-1">
      <ul>
        <li
          v-for="link in links"
          :key="link.name"
          class="hover:bg-gray-700 cursor-pointer mb-3 text-light"
        >
          <router-link
            :to="link.path"
            class="flex items-center text-decoration-none"
            exact-active-class="active-link"
          >
            <span class="text-light"
              ><i :class="link.icon"> </i
              >{{ isCollapsed ? '' : ' ' + link.name }}
            </span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideBarComponent',
  props: ['isCollapsed'],
  data() {
    return {
      links: [
        { name: 'Home', path: '/home', icon: 'fa-solid fa-house' },
        { name: 'Page2', path: '/page2', icon: '👤' },
        { name: 'Page3', path: '/page3', icon: '⚙️' },
      ],
    };
  },
};
</script>
<style scoped>
.active-link {
  color: #3490dc; /* Change to your preferred active color */
  font-weight: bold; /* Optionally, make the active link bold */
  border-left: 4px solid #3490dc; /* Optionally, add a border to highlight the active link */
  padding-left: 4px;
}
</style>
