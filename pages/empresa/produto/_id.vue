<template>
  <div>
    <VmHero :empresa="empresa"></VmHero>
    <div class="section">
      <div class="card is-clearfix columns">
        <figure class="card-image is-480x480 column is-one-thirds">
          <img :src="'data:image/jpeg;base64,'+produto.imagem" :alt="produto.imagemNome+'.jpg'"></img>
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
              <select>
                <option>1</option>
              </select>
            </div>
          </div>
          <div class="card-content__price is-pulled-left">
            <span class="title is-3"><strong>R&#x24; {{ Number(produto.preco).toFixed(2) }}</strong></span>
          </div>
          <div class="card-content__btn is-pulled-right">
            <button class="button is-primary" v-if="true">Add To Cart</button>
            <button class="button is-text" v-if="false">Remove From Cart</button>
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
      empresa: {},
    };
  },
  components: {
    VmHero
  },

  mounted () {
    this.retrieveProdutosDetalhes(this.$route.params.id);
  },

  methods: {
    retrieveProdutosDetalhes(id) {
      ProdutoDataService.get(id)
        .then(response => {
          this.produto = response.data;
          console.log("RETORNO: "+JSON.stringify(response.data));
          this.retrieveNomeEmpresa(this.produto.fkEmpresaId);
        })
        .catch(e => {
          console.log(e);
        });
      },
      retrieveNomeEmpresa(id){
      EmpresaDataService.getEmpresaNome(id)
        .then(response => {
          this.empresa = response.data;
          console.log("EMPRESA: "+id);
        })
        .catch(e => {
          console.log(e);
        });
      },
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

