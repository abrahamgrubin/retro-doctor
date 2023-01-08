<template>
    <h2>Retro View</h2>
    <Retro :template='this.template'/>
</template>
<script>
    import { defineComponent } from 'vue';
    import  Retro from '../components/Retro.vue';
    import { useRouter } from 'vue-router';
    import { API } from 'aws-amplify';
    import { getTemplate } from '../graphql/queries';
    export default defineComponent({
        name: 'RetroView',
        setup() {
      return {
        router: useRouter()
      }},
        created(){
           // this.getTemplate();
        },
        components: {
            Retro
        }, 
        data() {
            return {
                template: {}
            }
        },
        methods: {
            async getTemplate(){ 
              const id = "8c035644-a5a4-4676-93cb-1d6329dc1261";
              const template = await API.graphql({
                query: getTemplate,
                variables: { id: id }
              });
              debugger;
              this.template = template.data.getTemplate;
            },
        }
    })
</script>