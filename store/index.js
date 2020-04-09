export const state = () => ({
  userInfo: {
    hasSearched: false,
    productTitleSearched: ''
  }
})

export const mutations = {
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  }
}