<template>
  <section class="hero is-dark">
    <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand" >
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h4 class="is-3 is-flex-mobile">HUBC3</h4>
        </nuxt-link>
      </div>
     
      <div v-if="!begin" class="navbar-brand">
        <div class="navbar-item">
          <h1 v-if="!begin" class="subtitle is-3 is-flex-mobile"> {{ Empresa.nome }}</h1>
        </div>
      </div>

      <div  v-if="!begin" class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <span class="icon is-medium 2rem x 2rem"> <i class="fa fa-phone"></i> </span>
          <h1 v-if="!begin" class="subtitle is-3 is-flex-mobile">{{Empresa.telefone}}  </h1>
        </nuxt-link>
      </div>


      <div class="navbar-menu is-active">
        <div class="navbar-end">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
          <div class="navbar-item social" v-if="!begin">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">  <i class="fa fa-shopping-cart"></i> </span>
            <span :class="[numProductsAdded(empresa.id) > 0 ? 'tag is-info' : '']">{{ numProductsAdded(empresa.id) }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  
  
    <div class="hero-body">
      <div class="container">
        <h1 v-if="begin"   class="title has-text-centered"> HUB C3</h1> 
        <br v-if="!begin" >
        <br v-if="!begin" > 
        <h1 v-if="!begin"   class="title has-text-centered"> {{empresa.nome}} </h1> 
        <h2 v-if="begin"  class="subtitle has-text-centered">Lista de Empresas com serviço de e-commerce</h2>
        
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
  
  </div>
</section>
</template>

<script>
import VmSearch from '../search/Search';

export default {
  name: 'VmHero',

  props: ['empresa','subTitulo'],
  
  components: {
      VmSearch,
    },

  data(){
    return {
      isCheckoutActive: false,
      Empresa: {},
      begin: true,
      linkedinTooltip: 'Follow us on Linkedin',
      facebookTooltip: 'Follow us on Facebook', 
      twitterTooltip: 'Follow us on Twitter',
      instagramTooltip: 'Follow us on Instagram'
    }
  },
  mounted(){
    this.retrieveEmpresa();
    this.isBegin();
  },

  methods: {
    numProductsAdded (eid) {
      return this.$store.getters.productsAddedByEmpresa(eid).length;
    },
    showCheckoutModal () {
      this.$store.commit('showCheckoutModal', true);
    },
    retrieveEmpresa(){
      this.Empresa=this.$store.state.empresa;
    },
    isBegin(){
      this.begin=this.$props.empresa.id==-1;
    }
  }
};
/*
<div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
        </div>
*/
</script>

<style lang="scss" scoped>
    h1, h2 {
      color: #fff;
    }
    .shopping-cart {
      cursor: pointer;
    }
    a {
      color: grey;
    }
    * {
      border: 0px solid red;
    }

</style>