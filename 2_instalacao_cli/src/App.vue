<template>
    <h1>Componente principal App</h1>
    Fruta 2: {{ frutas[1] }}
    <br>
    <PrimeiroComponente/>
    <br>
    <LifeCycle/>
</template>

<script>
    import PrimeiroComponente from './components/PrimeiroComponente.vue'
    import LifeCycle from './components/LifeCycle.vue'
    export default {
        name: 'App',
        components: {
            PrimeiroComponente,
            LifeCycle
        },
        data() { //Variáveis para componente global
            return {
                frutas: ['banana','maçã']
            }
        }
    }
</script>

<style>
    body {color: red;}
</style>