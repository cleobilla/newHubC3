<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="empresa in empresasL" :key="empresa.id">
      <VmEmpresas :empresa="empresa"></VmEmpresas>
    </div>
    <div class="section" v-if="empresas.length === 0">
      <p>{{ noEmpresaLabel }}</p>
    </div>
  </div>
</template>

<script>
import VmEmpresas from '../Empresas';
import { getByTitle } from '@/assets/filters';

export default {
  components: { VmEmpresas },
  props: {'empresas':Array},

  data () {
    return {
      id: '',
      noEmpresaLabel: 'Nenhuma empresa encontrada.',
      empresasFiltered: []
    };
  },
   computed: {
    empresasL () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getEmpresaByTitle();
      } else {
        return this.$props.empresas;
      }
    }
  },
  methods: {
    getEmpresaByTitle () {
      let listOfEmpresas = this.$props.empresas,
          titleSearched = this.$store.state.userInfo.titleSearched;
      
      return this.empresasFiltered = getByTitle(listOfEmpresas, titleSearched);
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>

<!-- <template>
 
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="empresa in empresas" :key="empresa.id"> <!-- style="max-width: 20rem;"> 
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
 -->
