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
        async GetEvents() {
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
        this.GetEvents()
    }
}

</script>