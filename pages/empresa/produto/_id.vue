<template>
  <div>
    <VmHero :empresa="empresa" subTitulo=""></VmHero>
    <div class="section">
      <div class="card is-clearfix columns">
        <figure class="card-image is-480x480 column is-one-thirds">
          <img :src="'data:image/jpeg;base64,'+produto.imagem" :alt="produto.imagemNome+'.jpg'">
        </figure>
        <div class="card-content column is-two-thirds">
          <div class="card-content__title">
            <h2 class="title is-4">{{ produto.nome }}</h2>
          </div>
          <div class="card-content__text">
            <p> {{produto.descricao}} </p>
          </div>
          <div class="card-content__reviews">
            <div class="select is-rounded is-small is-pulled-right">
                <select v-model="quantidade">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
            </div>
          </div>
          <div class="card-content__price is-pulled-left">
            <span class="title is-3"><strong>R&#x24; {{ Number(produto.preco).toFixed(2) }}</strong></span>
          </div>
          <div class="card-content__btn is-pulled-right">
            <button class="button is-primary" @click="addToCarrinho(produto)" v-if="!isProdutoInCarrinho(produto.id)"> Adiciona ao Carrinho </button>
            <button class="button is-text" @click="removeFromCarrinho(produto.id)" v-if="isProdutoInCarrinho(produto.id)" >Remove do Carrinho </button>
          </div>
        </div>  
      </div>    
    </div>
  </div>       
</template>

<script>
import ProdutoDataService from "~/services/ProdutoDataService";
import EmpresaDataService from "~/services/EmpresaDataService";
import VmHero from '@/components/hero/Hero';

export default {
  name: 'empresa-produto-id',

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  
  data () {
    return {
      produto: {},
      empresa: {
        id: '',
        nome: ''
      },
      quantidade: 1
    };
  },
  components: {
    VmHero
  },

  mounted () {
    this.retrieveProdutosDetalhes(this.$route.params.id);
    this.retrieveNomeEmpresa();
    this.retrieveIDEmpresa();
  },

  methods: {
    retrieveProdutosDetalhes(id) {
      ProdutoDataService.get(id)
        .then(response => {
          this.produto = response.data;
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
    },
    isProdutoInCarrinho(id){
      return this.$store.getters.isProdutoInCarrinho(id);
    },
    addToCarrinho (produto) {
      let prodData = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: this.quantidade,
        empresaID: produto.fkEmpresaId

      }
      this.$store.commit('addToCarrinho', prodData);
    },
    removeFromCarrinho (id) {
      this.$store.commit('removeFromCarrinho', id);
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 15px 10px 15px 0;

    &__text {
      margin: 15px 0;
    }
    &__reviews {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
</style>

