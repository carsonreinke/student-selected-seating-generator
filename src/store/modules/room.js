import Room from '@/models/room';

export default {
    //namespaced: true,
    state: {
        room: new Room()
    },
    getters: {
        allDesks: (state) => state.room.desks
    },
    actions: {
        addDesk: ({ commit }) => {
            commit('ADD_DESK');
        },
        moveDesk: ({ commit }, { desk, x, y } ) => {
            commit('EDIT_DESK_POSITION', { desk, x, y });
        },
        removeDesk: ({ commit }, desk) => {
            commit('REMOVE_DESK', desk);
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
    }
}