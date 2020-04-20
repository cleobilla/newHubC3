<template>
  <section class="hero is-dark">
    <div class="hero-head">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" >
          <nuxt-link :to="{ name: 'index' }" class="navbar-item">
            <h4 class="is-3 is-flex-mobile">HUBC3</h4>
          </nuxt-link>
        </div>
      
        <!--
        <div v-if="!begin" class="navbar-brand">
          <div class="navbar-item">
            <h1 v-if="!begin" class="subtitle is-3 is-flex-mobile"> {{ Empresa.nome }}</h1>
          </div>
        </div>

        <div  v-if="!begin" class="navbar-brand">
          <nuxt-link :to="{ name: 'index' }" class="navbar-item">
            <span class="icon is-medium 2rem x 2rem"> <i class="fa fa-phone fa-2x"></i> </span>
            <h1 v-if="!begin" class="subtitle is-3 is-flex-mobile">{{Empresa.telefone}}  </h1>
          </nuxt-link>
        </div>
        -->

        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <div class="navbar-item field">
              <VmSearch></VmSearch>
            </div>
            <div class="navbar-item social" v-if="!begin">
              <a v-if="Empresa.whatsapp!=null" :href="Empresa.whatsapp" class="icon is-medium 2rem x 2rem" :title="whatsAppTootltip">
                <i class="fa fa-whatsapp fa"></i>
              </a>
              <a v-if="Empresa.facebook!=null" :href="Empresa.facebook" class="icon is-medium 2rem x 2rem" :title="facebookTooltip">
                <i class="fa fa-facebook fa"></i>
              </a>
              <a v-if="Empresa.twitter!=null" :href="Empresa.twitter" class="icon is-medium 2rem x 2rem" :title="twitterTooltip">
                <i class="fa fa-twitter fa"></i>
              </a>
              <a v-if="Empresa.instagram!=null" :href="Empresa.instagram" class="icon is-medium 2rem x 2rem" :title="instagramTooltip">
                <i class="fa fa-instagram fa"></i>
              </a>
              <a v-if="Empresa.linkedin!=null" :href="Empresa.linkedin" class="icon is-medium 2rem x 2rem" :title="linkedinTooltip">
                <i class="fa fa-linkedin fa"></i>
              </a>
            </div>
            <div class="navbar-item shopping-cart" @click="showCheckoutModal">
              <span class="icon is-medium 2rem x 2rem">  <i class="fa fa-shopping-cart"></i> </span>
              <span :class="[numProductsAdded(empresa.id) > 0 ? 'tag is-info' : '']"> {{ numProductsAdded(empresa.id) }}</span>
            </div>
          </div>
        </div>

        <!-- For mobile and tablet 
        <div v-show="isMenuOpen" class="navbar-end">
          <VmMenu></VmMenu>
        </div>
        -->

        <!-- For desktop 
        <div class="navbar-end is-hidden-mobile">
          <VmMenu></VmMenu>
        </div>
        -->
      </nav>
    </div>

    <div class="hero-body">
      <div class="container">
        <h1 v-if="begin" class="title has-text-centered"> HUB C3</h1> 
        <h1 v-if="!begin" class="title has-text-centered"> {{empresa.nome}} </h1> 
        <h2 v-if="begin" class="subtitle has-text-centered">Lista de Empresas com serviço de e-commerce</h2>
        <h2 v-if="!begin" class="subtitle has-text-centered"> 
          <nuxt-link :to="{ name: 'index' }" class="has-text-centered">
            <span class="icon is-medium 2rem x 2rem"> <i class="fa fa-phone fa"></i> </span>
              {{Empresa.telefone}}
          </nuxt-link>
        </h2>
      </div>
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
      Empresa: {whatsapp: null,
                facebook: null,
                twitter: null,
                linkedin: null,
                instagram: null
                },
      begin: true,
      linkedinTooltip: 'Nos siga no Linkedin',
      facebookTooltip: 'Nos siga no Facebook', 
      twitterTooltip: 'Nos siga no Twitter',
      instagramTooltip: 'Nos siga no Instagram',
      whatsAppTootltip: 'Nos adicione no WhatsApp'
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