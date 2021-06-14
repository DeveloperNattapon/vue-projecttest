<template>
    <v-app>
        <v-container fluid tag="section">
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Register
                            </div>
                        </template>

                        <v-form ref="loginForm" v-model="valid" lazy-validation>
                            <v-container class="py-6">
                                <v-text-field 
                                        class="purple-input" 
                                        label="User Name" 
                                        outlined 
                                        v-model="user.UserName" 
                                        required 
                                        :rules="[rules.required]"
                                />

                                <v-text-field 
                                        label="First Name" 
                                        class="purple-input" 
                                        outlined 
                                        v-model="FirstName" 
                                        required 
                                        :rules="[rules.required]"
                                        maxlength="20"
                                />

                                <v-text-field 
                                        label="Last Name" 
                                        class="purple-input" 
                                        outlined  
                                        v-model="LastName" 
                                        required 
                                        :rules="[rules.required]"
                                        maxlength="20"
                                />

                                <v-text-field 
                                        label="Email Address" 
                                        class="purple-input" 
                                        outlined  
                                        v-model="user.EmailAddress" 
                                        required 
                                        :rules="emailRules"
                                />

                                <v-text-field 
                                        label="Password" 
                                        class="purple-input" 
                                        outlined  
                                        v-model="user.Password" 
                                        required 
                                        :append-icon="show1?'mdi-eye':'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                         name="input-10-1" hint="At least 8 characters" counter
                                        @click:append="show1 = !show1" 
                                />                       
                                 <v-text-field 
                                        block v-model="verify" 
                                        outlined
                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                        :rules="[rules.required, passwordMatch]" 
                                        :type="show1 ? 'text' : 'password'"
                                         name="input-10-1" 
                                         label="Confirm Password" counter 
                                         @click:append="show1 = !show1">
                                </v-text-field>

                                <v-col class="text-right">
                                <v-btn class="mr-4" 
                                    color="success"
                                    @click="registerSubmit" 
                                    :disabled="!valid"
                                >Register</v-btn>
                                
                                <v-btn @click="clear">
                                    clear
                                </v-btn>
                            </v-col>
                            </v-container>
                        </v-form>
                    </base-material-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>

</template>

<script>
import { Encrypt,CryptoKey} from "../../share/index";
    export default {
        components: {

        },
        computed:{
        passwordMatch() {
            return () => this.user.Password === this.verify || "Password must match";
        }
        },
        data(){
            return {
                FirstName:"",
                LastName:"",
                valid: true,
                verify: "",
                show1: false,
                user:
                {
                    UserName:"",
                    RealName:"",
                    EmailAddress:"",
                    Password: ""
                } ,
                rules: {
                    required: value => !!value || "Required.",
                    min: v => (v && v.length >= 8) || "Min 8 characters"
                },   
                 emailRules: [
                    v => !!v || "Required",
                    v => /.+@.+\..+/.test(v) || "E-mail must be valid"
                ],  
            }
        },
        methods:{
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
            },
            registerSubmit(){
                let key = CryptoKey()
                if (!this.$refs.loginForm.validate()) return
                    let encrtptpass = Encrypt(this.user.Password,key);
                    console.log(encrtptpass)
            },
            clear () {
                this.FirstName = ''
                this.LastName = ''
                this.user.EmailAddress = ''
                this.user.UserName = ''
                this.user.verify = ''
                this.user.Password= ''
                this.$refs.loginForm.reset()
            },
        }
    }
</script>