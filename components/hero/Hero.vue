<template>
  <div class="hero is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{empresa.nome}}
        </h1>
        <h2 class="subtitle">
          {{subTitulo}}
        </h2>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu is-active">
            <div class="navbar-end">
              <div class="navbar-item shopping-cart" @click="showCheckoutModal">
                  <span class="icon">
                    <i class="fa fa-shopping-cart"></i>
                  </span>
                  <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['empresa','subTitulo'],
  data(){
    return {
      isCheckoutActive: false
    }
  },
  computed: {
    numProductsAdded () {
      return this.$store.getters.productsAdded.length;
    }
  },

  methods: {
    showCheckoutModal () {
      this.$store.commit('showCheckoutModal', true);
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
    .hero {
      background: rgb(0, 0, 0);
    }
    h1, h2 {
      color: #fff;
    }
    .shopping-cart {
      cursor: pointer;
    }
    a {
      color: grey;
    }
</style>