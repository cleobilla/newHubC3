<div>
      <div class="card-image mx-auto" style="width: 200px;">
        <figure class="img-thumbnail">
          <img :src="'data:image/jpeg;base64,'+empresa.imagem" :alt="empresa.logoNome+'.jpg'">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ empresa.nome }}</p>
            <p class="subtitle is-4"> {{ empresa.telefone }} </p>
          </div>
        </div>
      </div>
    <nuxt-link 
      class="details" 
      :to="'/empresa/'+empresa.id"
      @click.native="saveEmpresa(empresa)"
    >
    </nuxt-link>
  </div>