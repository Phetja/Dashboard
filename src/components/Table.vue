<template>
  <div class="bg-white p-2 m-1">
    <p class="text-dark">Dipping Line Status</p>
    <table class="w-full border-collapse border border-gray-200">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-5 py-2">Description</th>
          <th
            v-for="(label, index) in labels"
            :key="index"
            class="border border-gray-300 px-1 py-2"
          >
            {{ label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td class="border border-gray-300 px-1 py-2">{{ row.label }}</td>
          <td
            v-for="(circle, colIndex) in row.circles"
            :key="colIndex"
            class="border border-gray-300 px-1 py-2"
          >
            <div
              :class="circleClass(circle)"
              class="w-6 h-6 rounded-full mx-auto"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  data() {
    return {
      descriptions: ['Dipping', 'Chain Running', 'CV Oven', 'CV Tank'],
      labels: Array.from(
        { length: 24 },
        (_, i) => `L${(i + 1).toString().padStart(2, '0')}`
      ),
      arrayData: [
        [
          1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1,
          0,
        ], // Row 2
        [
          0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
          1,
        ], // Row 3
        [
          1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
          1,
        ], // Row 4
        [
          0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1,
          0,
        ], // Row 5
      ],
      rows: [],
    };
  },
  mounted() {
    this.generateTableData();
  },
  methods: {
    generateTableData() {
      // Create data for each row
      this.rows = this.descriptions.map((label, rowIndex) => ({
        label,
        circles: this.arrayData[rowIndex] || Array(24).fill(null), // Use arrayData for circles or null for row 1
      }));
    },
    circleClass(data) {
      // Determine the circle color based on data: 0 for black, 1 for blue
      return data === 1 ? 'bg-blue-500' : 'bg-black';
    },
  },
};
</script>

<style scoped>
.table-auto {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.bg-blue-500 {
  background-color: #4299e1;
}

.bg-black {
  background-color: #000000;
}
</style>
