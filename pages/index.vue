<template>
  <div>
    <VmHero :empresa="empresaLabel"></VmHero>
    <VmEmpresas :empresas="empresas"></VmEmpresas>
  </div>
</template>

<script>
import VmEmpresas from '@/components/lista_empresas/ListaEmpresasContainer';
import VmHero from '@/components/hero/Hero';
import EmpresaDataService from "../services/EmpresaDataService";


export default {
  name: 'index',
  data() {
    return {
      empresas: [],
      empresaLabel: {nome: "Empresas"}
    };
  },
  components: {
    VmEmpresas,
    VmHero
  },
  methods: {
    retrieveEmpresas() {
      EmpresaDataService.getAll()
        .then(response => {
          this.empresas = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveEmpresas();
  }
};
</script>
