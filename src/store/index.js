/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import _ from 'lodash';
import * as types from './mutation-types';

// Vuex State
const state = {
  current: {},
  free: [],
  discount: {},
};

// Vuex Getters
const getters = {
  current: state => state.current,
  free: state => state.free,
  discount: state => state.discount,
};

// Vuex Mutations
const mutations = {
  [types.UPDATE_CURRENT](state, current) {
    state.current = current;
  },
  [types.UPDATE_DISCOUNT](state, discount) {
    state.discount = discount;
  },
  [types.ADD_FREE](state, id) {
    const index = _.indexOf(state.free, id);
    if (index < 0) state.free.push(id);
  },
  [types.REMOVE_FREE](state, id) {
    const index = _.indexOf(state.free, id);
    state.free.splice(index, 1);
  },
};

// Vuex Actions
const actions = {
  addFree({ commit }, id) {
    commit(types.ADD_FREE, id);
  },
  removeFree({ commit }, id) {
    commit(types.REMOVE_FREE, id);
  },
  setCurrent({ commit }, current) {
    commit(types.UPDATE_CURRENT, current);
  },
  setDiscount({ commit }, discount) {
    commit(types.UPDATE_DISCOUNT, discount || {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
