<template>
  <div>
    <img class="img-fluid" :src="'data:image/jpeg;base64,'+empresa.imagem" :alt="empresa.logoNome+'.jpg'" style='height: 100%; width: 100%; object-fit: contain'>
    <div class="card-body">
       <p class="title is-4">{{ empresa.nome }}</p>
       <p class="subtitle is-4"> {{ empresa.telefone }} </p>
    </div>
    <nuxt-link 
      class="details" 
      :to="'/empresa/'+empresa.id"
      @click.native="saveEmpresa(empresa)"
    >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'empresas',
  props: ['empresa'],
  methods:{
    saveEmpresa (empresa) {
        this.$store.commit('setEmpresa', empresa);
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
 .card-content {
   padding: 0;
 }
 .buttons {
   margin: 0;
 }
 *{
   border: 0px solid red;
 }
</style>


