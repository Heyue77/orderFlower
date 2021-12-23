<template>
  <main>
    <NuxtPage />
  </main>
</template>


<script setup>
const { user } = useUser();
const config = useRuntimeConfig();

if (!config.API_BASE) {
  let { data } = await useFetch(`/api/users/getuser`, { server: false });
  watchEffect(() => {
    if (data.value) {
      user.value = data.value;
    }
  })
}



</script>
<style>
@import "~/styles/main.css";
</style>
