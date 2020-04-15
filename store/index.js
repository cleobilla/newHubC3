export const state = () => ({
  carrinho: [
    /*{
      id: '',
      nome: '',
      preco: 0.0,
      quantidade: 0
    }*/
],
  empresaInfo: {
    id: '',
    nome: ''
  },
  userInfo: {
    hasSearched: false,
    productTitleSearched: ''
  },
  systemInfo: {
    openCheckoutModal: false
  }
})

export const getters = {
  isProdutoInCarrinho: (state) => (id) => {
    return state.carrinho.some(item => item.id === id);
  },
  productsAdded: state => {
    return state.carrinho;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  }
}

export const mutations = {
  addToCarrinho:(state,produto) => {
    state.carrinho.push(produto);
    console.log("Carrinho: "+JSON.stringify(state.carrinho));
  },
  removeFromCarrinho:(state,id) =>{
    var result = state.carrinho.filter(function(el) {
      return el.id == id;
    });
      
    for(var elemento of result){
      var index = state.carrinho.indexOf(elemento);    
      state.carrinho.splice(index, 1);
    }
  },
  setEmpresaNome:(state,nome) => {
    state.empresaInfo.nome=nome;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  }
}