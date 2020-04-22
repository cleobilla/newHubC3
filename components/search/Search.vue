<template>
	<p class="control has-icons-left">
		<input
			class="input is-rounded"
			type="text"
			v-model="searchValue"
			:placeholder="placeholder"
			@keyup="search(searchValue)"
		>
		<span class="icon is-small is-left">
			<i class="fa fa-search"></i>
		</span>
	</p>
</template>

<script>
export default {
  name: 'search',
	data () {
		return {
			searchValue: ''
		}
	},
	mounted(){
		this.$store.commit('setHasUserSearched', false);
		this.$store.commit('setTitleSearched', '');
	},

	computed: {
		placeholder () {
			if (this.$route.path === '/wishlist') {
				return 'Search in wishlist...';
			} else {
				return 'Search...';
			}
		}
	},

	methods: {
		search (value) {
			if (value.length > 0) {
				this.$store.commit('setHasUserSearched', true);
				this.$store.commit('setTitleSearched', value);
			} else {
				this.$store.commit('setHasUserSearched', false);
				this.$store.commit('setTitleSearched', '');
			}
		}
	}
}
</script>

