<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        <h1 class="text-xl font-bold text-gray-900 uppercase tracking-wider">
          Shapes
        </h1>
        <button
          @click="logout"
          class="text-red-500 hover:text-red-700 font-medium transition-colors"
        >
          Logout
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GridFilter />
      <ItemGrid />
    </main>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const authCookie = useCookie("auth");

const logout = () => {
  authCookie.value = null;
  router.push("/login");
};
</script>
