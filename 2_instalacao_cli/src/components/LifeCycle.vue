<template>
    <p>LifeCycle, nome: {{ nome }}</p>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'Desconhecido'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = 'UB Social'
            }, 1000);
        },
        mounted() {
            this.nome = 'UB Social2'
        }
    }
</script>