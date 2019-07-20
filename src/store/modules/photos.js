const state = {
  photos: [],
  searchParam: ""
};

const getters = {
  allPhotos: state => state.photos,
  searchParameter: state => state.searchParam
};

const actions = {
  async fetchPhotos({ commit }, payload = {}) {
    const { query = "african", page = 1, count = 7 } = payload;
    let client_id =
      "eece152dc6796e177ea4848a92953e3a3e7b7d928e645b05af4e351b5290cf5b";
    let url = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&count=${count}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log("res", responseJson);

    commit("setPhotos", responseJson.results);
  },

  updateStateSearchParam({ commit }, param) {
    commit("setSearchParam", param);
  }
};

const mutations = {
  setPhotos: (state, photos) => (state.photos = photos),
  setSearchParam: (state, param) => (state.searchParam = param)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
