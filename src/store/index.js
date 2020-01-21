import Vue from 'vue';
import Vuex from 'vuex';
import Room from '@/models/room';
import BruteForceStrategy from '@/models/brute-force-strategy';

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    room: new Room(new BruteForceStrategy())
  },
  getters: {
    allDesks: (state) => state.room.desks,
    deskCount: (state) => state.room.desks.length,
    isEmpty: (state) => state.room.desks.length === 0,
  },
  actions: {
    addDesk: ({ commit }) => {
      commit('ADD_DESK');
    },
    moveDesk: ({ commit }, { desk, x, y }) => {
      commit('EDIT_DESK_POSITION', { desk, x, y });
    },
    removeDesk: ({ commit }, desk) => {
      commit('REMOVE_DESK', desk);
    },
    arrange: ({ commit }) => {
      commit('ARRANGE');
    },
  },
  mutations: {
    ADD_DESK: (state) => {
      state.room.addDesk();
    },
    EDIT_DESK_POSITION: (state, { desk, x, y }) => {
      desk.position.x = x;
      desk.position.y = y;
    },
    REMOVE_DESK: (state, desk) => {
      state.room.removeDesk(desk);
    },
    ARRANGE: (state) => {
      state.room.arrange();
    },
  }
});
