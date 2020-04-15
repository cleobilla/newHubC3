<template>
	<div :class="[ openModal ? 'is-active' : '', 'modal' ]">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">{{ modalTitle }}</p>
				<button class="delete" aria-label="close" @click="closeModal(false)"></button>
			</header>
			<section class="modal-card-body">
				<div v-if="!isCheckoutSection">
					<div class="box" v-for="product in products" :key="product.id">
						<button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product.id)">{{ removeLabel }}</button>
						<p>{{ product.nome }}  {{ product.quantidade > 0 ?  ` - Quantidade: ${product.quantidade}` : ''}}</p>
						<p> R&#x24; {{ Number(product.preco).toFixed(2) }} </p>
					</div>
					<div v-if="products.length === 0">
						<p>{{ cartEmptyLabel }}</p>
					</div>
				</div>
				<div v-if="isCheckoutSection">
					<p>You bought it :-)</p>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button v-show="products.length > 0 && !isCheckoutSection" class="button is-success" @click="onNextBtn">{{ buyLabel }}</button>
				<button v-if="isCheckoutSection" class="button is-success" @click="closeModal(true)">{{ closeLabel }}</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkout',
    
	data () {
		return {
			modalTitle: 'Carrinho',
			removeLabel: 'Remover do Carrinho',
			cartEmptyLabel: 'Seu Carrinho está Vazio',
			closeLabel: 'Fechar',
			isCheckoutSection: false
		}
	},

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				if (this.$store.getters.isCheckoutModalOpen) {
					return true;
				} else {
					return false;
				}
			},
			buyLabel (eid) {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantidade >= 1) {
						quantity = product.quantidade;
					}

					pricesArray.push((product.preco * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
				
				if (totalProducts > 1) { // set plural or singular
					productLabel = 'produtos';
				} else {
					productLabel = 'produto';
				}
				return `Comprar ${totalProducts} ${productLabel} por R$ ${Number(finalPrice).toFixed(2)}`;
		}
	},

	methods: {
		closeModal (reloadPage) {
			this.$store.commit('showCheckoutModal', false);

			if (reloadPage) {
				window.location.reload();
			}
		},
		removeFromCart (id) {
      		this.$store.commit('removeFromCarrinho', id);
    	},
		onNextBtn () {
			console.log("Comprar");
		},
		onPrevBtn () {
			this.isCheckoutSection = false;
		}
	}
}
</script>

