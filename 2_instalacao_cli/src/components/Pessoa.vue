<template>
    <div>
        <p>Descrição da pessoa: {{ nome }}</p>
        <Info/>
        <Form/>
    </div>
</template>

<script>
    import Info from './Info.vue'
    import Form from './Form.vue'
    export default {
        name: 'Pessoa',
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome: 'UB Social'
            }
        } 
    }
</script>