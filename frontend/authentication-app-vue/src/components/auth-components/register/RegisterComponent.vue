<template>
    <div class="container text-center">
        <h1>Register Page</h1>
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form
                    class="text-center border border-primary p-5"
                    style="margin-top:10px; height:auto; padding-top:100px !important"
                    v-on:submit.prevent="registerSubmitUserForm()"
                >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control mb-5"
                        placeholder="Inclua seu nome completo"
                        required
                        v-model="registerForm.name"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control mb-5"
                        placeholder="Inclua seu E-mail"
                        required
                        v-model="registerForm.email"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control mb-5"
                        placeholder="Inclua seu password"
                        required
                        v-model="registerForm.password"
                    />
                    <p>Já tem uma conta?
                        <router-link
                            to="/login"
                        >Login aqui!</router-link>
                    </p>

                    <center>
                        <button
                            @click="submitRegisterUser"
                            class="btn btn-primary btn-block w-75 my-4"
                        >Registrar</button>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>

<script src='./Register.js'></script>

<style scoped>

</style>
