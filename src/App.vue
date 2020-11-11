<template>
<v-app>
    <v-main>
        <router-view/>
        <alertDialog/>
    </v-main>
</v-app>
</template>

<script>
import alertDialog from './components/alert'
export default {
  components:{
    alertDialog
  }
}
</script>
