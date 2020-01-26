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
    allStudents: (state) => state.room.students,
    studentCount: (state) => state.room.students.length,
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
    addStudent: ({ commit }) => commit('ADD_STUDENT'),
    normalize: (context) => {
      const diff = context.getters.deskCount - context.getters.studentCount;

      if (diff < 0) {
        [...Array(Math.abs(diff))].forEach(() => context.dispatch('addDesk'));
      }
      else if (diff > 0) {
        [...Array(diff)].forEach(() => context.dispatch('addStudent'));
      }
    },
    changeStudentName: ({ commit }, { student, name }) => {
      commit('CHANGE_STUDENT_NAME', { student, name });
    },
    addPreference: ({ commit }, { student, preference }) => {
      commit('ADD_PREFERENCE', { student, preference });
    },
    removePreference: ({ commit }, { student, preference }) => {
      commit('REMOVE_PREFERENCE', { student, preference });
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
    ADD_STUDENT: (state) => {
      const student = state.room.addStudent();
      student.name = `Student ${student.id}`
    },
    CHANGE_STUDENT_NAME: (state, { student, name }) => {
      student.name = name;
    },
    ADD_PREFERENCE: (state, { student, preference }) => {
      student.addPreference(preference);
    },
    REMOVE_PREFERENCE: (state, { student, preference }) => {
      student.removePreference(preference);
    },
    ARRANGE: (state) => {
      state.room.arrange();
    },
  }
});
