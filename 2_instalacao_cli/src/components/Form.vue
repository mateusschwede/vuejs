<template>
    <p>Formulário:</p>
    <form>
        <InputText/>
        <InputText/>
        <Submit/>
    </form>
</template>

<script>
    import InputText from './form/InputText.vue'
    import Submit from './form/Submit.vue'
    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        }
    }
</script>