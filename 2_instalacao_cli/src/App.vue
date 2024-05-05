<template>
    <h1>Componente principal App</h1>
    Fruta 2: {{ frutas[1] }}
    <br>
    <PrimeiroComponente/>
    <br>
    <LifeCycle/>
    <br>
    <Pessoa/>
</template>

<script>
    import PrimeiroComponente from './components/PrimeiroComponente.vue'
    import LifeCycle from './components/LifeCycle.vue'
    import Pessoa from './components/Pessoa.vue'
    export default {
        name: 'App',
        components: {
            PrimeiroComponente,
            LifeCycle,
            Pessoa
        },
        data() { //Variáveis para componente global
            return {
                frutas: ['banana','maçã']
            }
        }
    }
</script>

<style>
    body {color: rgb(249, 158, 158);}
</style>