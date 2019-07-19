const state =  {
    photos: [],
    searchParam: ''
}

const getters = {
    allPhotos: state => state.photos,
    searchParameter: state => state.searchParam
};

const actions = {
    async fetchPhotos({commit}, payload = {}) {
        const { query = 'african', page = 1, count = 8 } = payload;
        let url = ''
        const response = await fetch(url);
        const responseJson = await response.json();

        commit('setPhotos', responseJson.results);
    };

    updateStateSearchParam({commit}, param) {
        commit('setSearchParam', param);
    };
};

const mutations = {
    setPhotos: (state, photos) => (state.photos = photos),
    setSearchParam: (state, param) => (state.searchParam = param)
};

export default {
    state,
    getters,
    actions,
    mutations
}