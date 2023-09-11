const app = Vue.createApp({
    data() {
        return {
            dischi: [],
        };
    },
    methods: {

    },
    mounted() {
        axios.get("api/dischi.php").then(function (response) {
            this.dischi = response.data;
            console.log(response.data);
        });
    },
});

app.mount("#app");

