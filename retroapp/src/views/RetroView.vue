<template>
    <h2>Retro View</h2>
    <Retro :template='this.template'/>
</template>
<script>
    import { defineComponent, ref } from 'vue';
    import  Retro from '../components/Retro.vue';
    import { useRouter } from 'vue-router';
    export default defineComponent({
        name: 'RetroView',
        setup() {
      return {
        router: useRouter()
      }},
        created(){
            this.getTemplate()
        },
        
        components: {
            Retro
        }, 
        data() {
            return {
            template: this.$route.params.template
            }
        },
        methods: {
            getTemplate() {
              console.log(this)   
            }
        }
    })
</script>