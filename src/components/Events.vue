<template>
    <div v-for="event in eventList" :key="event.id" class="eventList">
        <div>{{ event }}</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Events",
    data () {
        return {
            eventList: [],
        }
    },
    methods: {
        async getEvents() {
            const res = await axios
            .get('https://localhost:44398/Event/GetAllEvents')
            .then((result) => {
                return result.data
            })
            this.eventList = res
            console.log(this.eventList)
        }
    },
    mounted() {
        this.getEvents()
    }
}

</script>
