<template>
  <div>
    <VmHero :empresa="empresaTemp" subTitulo="Lista de Empresas com serviço de e-commerce"></VmHero>
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
      empresaTemp: 
        {
          nome: "Empresas",
          id:-1
        }
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
