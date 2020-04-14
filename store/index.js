export const state = () => ({
  empresaInfo: {
    nome: ''
  },
  userInfo: {
    hasSearched: false,
    productTitleSearched: ''
  }
})

export const mutations = {
  setEmpresaNome:(state,nome) => {
    state.empresaInfo.nome=nome;
    console.log("Aqui");
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  }
}