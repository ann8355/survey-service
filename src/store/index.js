/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import _ from 'lodash';
import * as types from './mutation-types';

// Vuex State
const state = {
  qes: [],
};

// Vuex Getters
const getters = {
  qes: state => state.qes,
};

// Vuex Mutations
const mutations = {
  [types.ADD_QES](state, qes) {
    state.qes.push(qes);
  },
  [types.DEL_QES](state, id) {
    _.remove(state.qes, { // remove不會更新畫面dom
      qesId: id,
    });
    state.qes.splice(0, 0);// 觸發響應式更新
  },
};

// Vuex Actions
const actions = {
  addQes({ commit }, qes) {
    // API
    commit(types.ADD_QES, qes);
  },
  delQes({ commit }, qes) {
    // API
    commit(types.DEL_QES, qes);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
  strict: true,
};
