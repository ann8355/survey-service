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
  [types.DEL_QES_DETAIL](state, item) {
    const searchQes = state.qes.find(ele => ele.qesId === item.qes);
    const index = searchQes.qesDetail.findIndex(ele => ele.id === item.detail);
    searchQes.qesDetail.splice(index, 1);
  },
  [types.ADD_QES_DETAIL](state, item) {
    const searchQes = state.qes.find(ele => ele.qesId === item.qes);
    searchQes.qesDetail.splice(item.idx + 1, 0, item.detail);
  },
  [types.UPDATE_QES_DETAIL](state, item) {
    const searchQes = state.qes.find(ele => ele.qesId === item.qes);
    searchQes.qesDetail.splice(item.idx, 1, item.detail);
  },
  [types.UPDATE_QES](state, item) {
    const searchIdx = state.qes.findIndex(ele => ele.qesId === item.qesId);
    state.qes.splice(searchIdx, 1, item);
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
  delQesDetail({ commit }, qes) {
    // API
    commit(types.DEL_QES_DETAIL, qes);
  },
  addQesDetail({ commit }, qes) {
    // API
    commit(types.ADD_QES_DETAIL, qes);
  },
  updateQesDetail({ commit }, qes) {
    // API
    commit(types.UPDATE_QES_DETAIL, qes);
  },
  updateQes({ commit }, qes) {
    // API
    commit(types.UPDATE_QES, qes);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
  // strict: true,
};
