<template>
  <h2 class="heading">Dashboard</h2>
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div class="bg-white shadow rounded-2xl p-4">
      <h2 class="text-xl font-semibold mb-2">Customers ({{ timeSpanLabel }})</h2>
      <p class="text-3xl">{{ customerCount }}</p>
    </div>

    <div class="bg-white shadow rounded-2xl p-4">
      <h2 class="text-xl font-semibold mb-2">Bookings Today</h2>
      <p class="text-3xl">{{ bookingsToday }}</p>
    </div>

    <div class="bg-white shadow rounded-2xl p-4">
      <h2 class="text-xl font-semibold mb-2">Page Hits Today</h2>
      <p class="text-3xl">{{ pageHitsToday }}</p>
    </div>

    <div class="bg-white shadow rounded-2xl p-4">
      <h2 class="text-xl font-semibold mb-2">Revenue Today</h2>
      <p class="text-3xl">€ {{ revenueToday.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Fake API fetch simulation (you would replace these)
const customerCount = ref(0)
const bookingsToday = ref(0)
const pageHitsToday = ref(0)
const revenueToday = ref(0.00)
const timeSpanLabel = ref('Last 7 Days')

const fetchDashboardData = async () => {
  // Simulate API call
  // Replace this with real API calls using axios or fetch
  setTimeout(() => {
    customerCount.value = 124
    bookingsToday.value = 8
    pageHitsToday.value = 150
    revenueToday.value = 1520.50
  }, 500)
}

onMounted(() => {
  fetchDashboardData()
})
</script>

<style scoped>
  .heading {
    margin: 3rem 0 3rem 10rem;
  }
</style>
