<template>
<div class="">
   
    <v-dialog v-model="dialog"  transition="dialog-bottom-transition" max-width="400">
        <v-card dark >
            <v-toolbar>
                <v-toolbar-title>
                 <div v-if="data.type == 'error'"><v-icon  color="pink" class="ml-1">cancel</v-icon>   {{data.text}}</div> 
                 <div v-if="data.type == 'info'"><v-icon  color="orange" class="ml-1">info</v-icon>   {{data.text}}</div> 
                 <div v-if="data.type == 'done'"><v-icon color="teal" class="ml-1">check_circle</v-icon>   {{data.text}} </div>
                </v-toolbar-title>
            </v-toolbar>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            data: {
                type: '',
                text: ''
            }
        }
    },

    watch: {
        dialog(val) {
            if (!val) return
            setTimeout(() => (this.dialog = false), 4000)
        },
    },

    created() {
        this.$eventBus.$on('alert', (data) => {
            this.dialog = true
            this.data = data
        });
    }

}
</script>
