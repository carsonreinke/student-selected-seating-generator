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
        moveDesk: ({ commit }, { desk, x, y } ) => {
            commit('editDeskPosition', { desk, x, y });
        },
    },
    mutations: {
        addDesk: (state) => state.room.addDesk(),
        editDeskPosition: (state, { desk, x, y }) => {
            desk.position.x = x;
            desk.position.y = y;
        },
    }
}