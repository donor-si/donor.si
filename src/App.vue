<template>
  <div id="app" class="text-white flex flex-col min-h-screen bg-black-200">
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from 'Components/Hello.vue';



export default {
  name: 'App',
  components: {
    Hello
  },
  data() {
    return {
      message: 'Donor.si'
    };
  },
};
</script>

<style>
  @import './styles/style.css';
</style>
