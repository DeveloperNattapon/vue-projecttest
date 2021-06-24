<template>
  <v-container id="MainMenu" fluid tag="section">
        <v-container fluid tag="section">
            <v-row justify="center">
                <v-col cols="12" md="12">
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Register
                            </div>
                        </template>

                        <v-form ref="loginForm" lazy-validation>
                            <v-container class="py-6">
                                <v-text-field 
                                        class="purple-input" 
                                        label="User Name" 
                                        outlined 
                                        
                                />

                                <v-text-field 
                                        label="First Name" 
                                        class="purple-input" 
                                        outlined 
                                        maxlength="20"
                                />

                                <v-text-field 
                                        label="Last Name" 
                                        class="purple-input" 
                                        outlined   
                                        maxlength="20"
                                />

                                <v-text-field 
                                        label="Email Address" 
                                        class="purple-input" 
                                        outlined  
                                />
                                 <v-text-field                                  
                                    label="Password" 
                                    class="purple-input" 
                                    outlined  

                                ></v-text-field>
                                                 
                                 <v-text-field                                        
                                        outlined                                      
                                         class="purple-input" 
                                         label="Confirm Password"  
                                        >
                                </v-text-field>

                                <v-col class="text-right">
                                <!-- <v-btn class="mr-4" 
                                    color="success"
                                    @click="registerSubmit" 
                                    :disabled="!valid"
                                >Register</v-btn>
                                
                                <v-btn @click="clear">
                                    clear
                                </v-btn> -->
                            </v-col>
                            </v-container>
                        </v-form>
                    </base-material-card>
                </v-col>
            </v-row>
        </v-container>
  </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>