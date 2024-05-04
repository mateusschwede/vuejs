<template>
    <h2>PrimeiroComponente</h2>
    Nome: {{ nome }}
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() { //Variáveis para componente local
            return {
                nome: "ciclana"
            }
        }
    }
</script>