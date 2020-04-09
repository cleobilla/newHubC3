<template>
  <div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="'data:image/jpeg;base64,'+produto.imagem" :alt="produto.imagemNome+'.jpg'">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ produto.nome }}</p>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ produto.descricao }}</p>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>R&#x24; {{ Number(produto.preco).toFixed(2) }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="true">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="false" >{{ removeFromCartLabel }}</button>
          </div>
           <div class="select is-rounded is-small">
            <select>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link class="details" 
    :to="{
        name: 'empresa-produto-id',
        params: {
          id: produto.id
        }
      }"
    :produto="produto"
    >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'produtos',
  props: ['produto'],

  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart'
    }
  }
}
</script>

<style lang="scss" scoped>
 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
 }
 .button,
 .select {
   z-index: 2;
 }
 .select {
   position: absolute;
   right: 15px;
   bottom: 35px;
 }
 .card-content {
   padding: 0;
 }
 .buttons {
   margin: 0;
 }
</style>


