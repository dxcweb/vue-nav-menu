<template>
  <div style="height:400px">
    <nav-menu :option="option" :active="active"></nav-menu>
  </div>
</template>
<script>
import option from './config';

export default {
  data() {
    return {
      option
    };
  },
  computed: {
    active() {
      return this.$route.path;
    },
  },
}
</script>

