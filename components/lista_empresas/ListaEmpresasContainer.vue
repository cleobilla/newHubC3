<template>
 
  <div class="columns is-centered is-multiline">
    <div class="card is-centered column is-one-quarter" v-for="empresa in empresas" :key="empresa.id" style="max-width: 20rem;">
      <VmEmpresas :empresa="empresa"></VmEmpresas>
    </div>
  </div>
</template>

<script>

import VmEmpresas from '../Empresas';

export default {
  components: { VmEmpresas },
	props: {'empresas':Array}
}    
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
