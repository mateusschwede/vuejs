const MyNameApp = {
    data() {
        return {
            name: "fulano",
            idade: 25,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault(); //Não deixa recarregar página
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")