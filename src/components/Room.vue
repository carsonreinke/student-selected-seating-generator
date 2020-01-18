<template>
    <div id="room">
        <Desk v-for="desk in allDesks" :key="desk.id" :desk="desk" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Desk from '@/components/Desk.vue';

export default {
    name: 'Room',
    components: {
        Desk
    },
    computed: mapGetters(['allDesks'])
}
</script>

<style scoped>
    #room {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% - 3rem);
        height: 100%;
        margin-left: 3rem;
    }
</style>