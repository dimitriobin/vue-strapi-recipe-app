const state = () => ({
    aray: [1, 2, 3],
});

const getters = {
    getAray: (test: any) => test.aray.map((i: number) => i + 1),
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
};
