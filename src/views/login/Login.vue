<template>
    <v-app>
        <v-container fluid tag="section">
            <v-row justify="center">
                <v-col cols="6" md="4">
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Login
                            </div>
                        </template>
                        <v-form ref="loginForm" v-model="valid" lazy-validation>
                            <v-container class="py-6">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field class="purple-input" label="User Name" prepend-icon='mdi-account'
                                            v-model="username" required :rules="[rules.required]" outlined/>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field label="Password" class="purple-input" prepend-icon="mdi-lock"
                                            v-model="password" required :append-icon="show1?'mdi-eye':'mdi-eye-off'"
                                            :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                            name="input-10-1" hint="At least 8 characters" counter
                                            @click:append="show1 = !show1" outlined/>
                                    </v-col>

                                    <v-col cols="12" class="text-right">

                                        <v-btn color="success" class="mr-4" @click="submitLogion"
                                            :disabled="!valid">
                                            Login
                                        </v-btn>
                                        <router-link to="/register">Register</router-link>

                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </base-material-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    import {service} from './services/services';
    export default {
        components: {
            ...mapState('Login', ['status'])
        },
        computed: {


        },
        // watch: {
        //     rules: {
        //         handler(val) {
        //             console.log(val);
        //         }
        //     },
        //     deep: true
        //},
        data() {
            return {
                dialog: true,
                valid: true,
                username: '',
                password: "",
                verify: "",
                loginPassword: "",
                show1: false,
                rules: {
                    required: value => !!value || "Required.",
                    min: v => (v && v.length >= 8) || "Min 8 characters"
                },
                loginNameRules: {
                    required: value => !!value || "กรุณากรอบ."
                }
            }
        },
        created() {
            this.logout();
        },
        methods: {
            ...mapActions('Login', ['login', 'logout']),
            submitLogion() {
                const {
                    username,
                    password
                } = this;
                if (!this.$refs.loginForm.validate()) return
                console.log(username);
                localStorage.setItem('user', JSON.stringify({
                    username,
                    password
                }));
                if (username && password) {
                    this.login({
                        username,
                        password
                    })
                }

            }
        },
        mounted() {
          service.apiGetStock().then(res => {
              console.log(res);
          });

        }
    };

    //  loginEmailRules: [
    //                 v => !!v || "Required",
    //                 v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    //             ],
    //             emailRules: [
    //                 v => !!v || "Required",
    //                 v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    //             ],
</script>

<style></style>