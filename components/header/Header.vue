<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile">HUB C3</h1>
        </nuxt-link>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item social">
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
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmSearch from '../search/Search';

  export default {
    name: 'VmHeader',

    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
      }
    },

    components: {
      VmSearch,
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 35px;
  }
  a {
    color: grey;
  }
</style>
