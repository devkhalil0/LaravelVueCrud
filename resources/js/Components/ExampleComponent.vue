<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header">aComponent</div>

                    <div class="card-body">

                        <form @submit.prevent="testtoken">
                            <div>
                                <input type="email" v-model="form.email" name="email" class="form-control"
                                    placeholder="email">
                            </div><br>

                            <br>
                            <button type="submit" class="nav-link btn btn-lg btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

    export default {
        data(){
            return {
                form: {
                    email: '',
                },
            }
        },
        methods: {

            testtoken(){
                let token = localStorage.getItem('token')

                window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                axios.post('/api/check/token',this.form).then(res =>{
                        console.log(res)
                })
            },

        },

    }
</script>



