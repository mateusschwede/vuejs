const MyNameApp = {
    data() {
        return {
            name: "UB Social",
            alimentos: ['banana', 'maçã', 'uva'],
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")