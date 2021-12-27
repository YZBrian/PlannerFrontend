<template>
  <div class="card-columns">
    <div class="card text-white bg-dark mb-3" align="center">
      <div class="card-body">
        <input class="card-title" type="datetime-local" v-model="datetime" />
        <input class="card-text" type="text" v-model="description" />
        <button class="btn btn-primary" v-on:click="CreateEvent">
          Create New Event
        </button>
      </div>
    </div>

    <div
      v-for="event in eventList.events"
      :key="event.id"
      class="card text-white bg-dark mb-3"
      align="center"
    >
      <div class="card-body">
        <h5 class="card-title">{{ event.dateTime }}</h5>
        <p class="card-text">{{ event.description }}</p>
        <button class="btn btn-primary" @click="DeleteEvent(event.id)" >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Events",
  data() {
    return {
      eventList: [],
      datetime: "",
      description: "",
    };
  },
  methods: {
    async GetEvents() {
      const res = await axios
        .get("https://localhost:44398/Event/GetAllEvents")
        .then((result) => {
          return result.data;
        });
      this.eventList = res;
      console.log(this.eventList);
    },
    async DeleteEvent(id) {
      try {
        const res = await axios
          .delete("https://localhost:44398/Event/DeleteEvent?id=" + id)
          .then((result) => {
            return result.data;
          });
        this.Event = res;
        this.loaded = true;
      } catch (error) {
        console.log(error);
      }
      this.loaded = true;
      location.reload();
    },
    async CreateEvent() {
      const res = await axios
        .post(
          "https://localhost:44398/Event/CreateEvent?datetime=" +
            this.datetime +
            "&description=" +
            this.description
        )
        .then((result) => {
          return result.data;
        });
      this.eventList = res;
      console.log(this.eventList);
      location.reload();
    },
  },

  mounted() {
    this.GetEvents();
  },
};
</script>

<style>
.card {
  width: 19%;
  margin: 0.1%;
  display: inline-block;
}

.btn {
  border-radius: 25px;
}
</style>