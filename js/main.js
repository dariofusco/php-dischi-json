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
            this.dischi.push(response.data);
            console.log(this.dischi);
        });
    },
});

app.mount("#app");

