<template>
  <div>
    <VmHero :empresa="empresa"></VmHero>
    <VmProdutos :produtos="produtos"></VmProdutos>
  </div>
</template>

<script>
import VmProdutos from '@/components/lista_produtos/ListaProdutosContainer';
import VmHero from '@/components/hero/Hero';
import EmpresaDataService from "~/services/EmpresaDataService";


export default {
  name: 'index',
  data() {
    return {
      produtos: [],
      empresa: {}
    };
  },
  components: {
    VmProdutos,
    VmHero
  },
  methods: {
    retrieveProdutosFromEmpresa(id) {
      EmpresaDataService.getAllProdutos(id)
        .then(response => {
          this.produtos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveNomeEmpresa(id){
      EmpresaDataService.getEmpresaNome(id)
        .then(response => {
          this.empresa = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProdutosFromEmpresa(this.$route.params.id);
    this.retrieveNomeEmpresa(this.$route.params.id);
  }
};
</script>
