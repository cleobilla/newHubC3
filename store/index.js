export const state = () => ({
  carrinho: [
    /*{
      id: '',
      nome: '',
      preco: 0.0,
      quantidade: 0
    }*/
],
  empresa: {
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
  productsAddedByEmpresa: (state) => (eid) => {
    return state.carrinho.filter(item => item.empresaID == eid);
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  }
}

export const mutations = {
  addToCarrinho:(state,produto) => {
    state.carrinho.push(produto);
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
  setEmpresa:(state,empresa) => {
    state.empresa=empresa;
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