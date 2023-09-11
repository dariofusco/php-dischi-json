const app = Vue.createApp({
    data() {
        return {
            dischi: [],
        };
    },
    methods: {

    },
    mounted() {
        axios.get("api/dischi.php").then((response) => {
            this.dischi = response.data;
            console.log(this.dischi);
        });
    },
});

app.mount("#app");

