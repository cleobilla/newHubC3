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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['empresa','subTitulo']
}
</script>

<style lang="scss" scoped>
    .hero {
      background: rgb(0, 0, 0);
    }
    h1, h2 {
      color: #fff;
    }
</style>