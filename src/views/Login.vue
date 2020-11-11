<template>
<div>
    <v-row justify="center" align="center" style="height: 750px">
        <v-card width="400px">
            <v-container>
                <v-toolbar color="primary" dark class="mb-12">
                    <v-toolbar-title>
                        Login Form
                    </v-toolbar-title>
                </v-toolbar>
                <v-form @submit.prevent="submit" ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="user.username" label="UserName" outlined :rules="required" />
                    <v-text-field v-model="user.password" label="Password" outlined :rules="required" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" />
                    <v-btn  :loading="loading" type="submit" block color="primary" x-large>Sign in</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-row>
</div>
</template>

<script>
import axios from '../services/axios'
export default {
    data() {
        return {
            user: {
                username: null,
                password: null
            },
            loading: false,
            valid: true,
            showPassword: false,
            required: [
                v => !!v || 'required',
            ],
        }
    },

    methods:{
        submit(){
            this.loading = true
            this.$refs.form.validate()
            axios.post('Auth/Login', this.user).then(res => {
                this.$router.push('/home')
            }).catch(err => {
                console.log(err)
                this.$eventBus.$emit('alert', {
                    type: 'error',
                    text: 'username or password is invalid'
                });
            }).finally(()=>{
                this.loading = false
            })
        }
    }
}
</script>
