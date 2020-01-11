<template>
    <div class="desk" draggable="true"
    :style="{ left: desk.position.x + 'px', top: desk.position.y + 'px' }"
    @dragstart="onDragStart" @touchstart="onDragStart"
    @dragend="onDragEnd" @touchend="onDragEnd">
        <img alt="Desk" src="../assets/desk.svg">
        Desk
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'desk',
    props: ['desk'],
    data: () => {
        return {
            initialPosition: {}
        };
    },
    methods: {
        ...mapActions(['moveDesk']),
        onDragStart(event) {
            this.initialPosition = {x: event.clientX, y: event.clientY};
        },
        onDragEnd(event) {
            const { desk } = this;

            //Calculate new position
            const x = event.clientX - this.initialPosition.x + event.target.offsetLeft,
                y = event.clientY - this.initialPosition.y + event.target.offsetTop;
            this.moveDesk({ desk, x, y });
        }
    }
}
</script>

<style scoped>
    .desk {
        position: absolute;
    }

    .desk > img {
        width: 5em;
    }

    .desk * {
        pointer-events: none;
    }
</style>