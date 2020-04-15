<template>
  <div>
    <VmHero :empresa="empresa" subTitulo=""></VmHero>
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
      empresa: {
          nome: '',
          id: ''
      }
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
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveNomeEmpresa(){
      this.empresa.nome = this.$store.state.empresa.nome;
    },
    retrieveIDEmpresa(){
      this.empresa.id = this.$store.state.empresa.id;
    }
  },
  mounted() {
    this.retrieveProdutosFromEmpresa(this.$route.params.id);
    this.retrieveNomeEmpresa();
    this.retrieveIDEmpresa();

  }
};
</script>
