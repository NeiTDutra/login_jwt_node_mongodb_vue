<template>
    <div class="container text-center">
        <h1>Login Page</h1>
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form
                    class="text-center border border-primary p-5"
                    style="margin-top:10px; height;auto; padding-top:100px !important;"
                    v-on:submit.prevent="loginSubmitUserForm()"
                >
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-control mb-5"
                            name="email"
                            id="email"
                            placeholder="Digite seu E-mail"
                            v-model="loginForm.email"
                            :class="{
                                'is-invalid': isSubmited && $v.loginForm.email.$error,
                            }"
                        />
                        <div
                            v-if="isSubmited && !$v.loginForm.email.required"
                            class="invalid-feedback"
                        >
                            O campo email é obrigatório!
                        </div>
                    </div>

                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control mb-5"
                            name="password"
                            id="password"
                            placeholder="Digite seu Password"
                            v-model="loginForm.password"
                            :class="{
                                'is-invalid': isSubmited && $v.loginForm.password.$error,
                            }"
                        />
                        <div
                            v-if="isSubmited && !$v.loginForm.password.required"
                            class="invalid-feedback"
                        >
                            O campo password é obrigatório!
                        </div>
                    </div>

                    <p>Não tem uma conta?
                        <router-link
                            to="/register"
                        >Cadastre aqui!</router-link>
                    </p>

                    <center>
                        <button
                            @click="submitLoginUser"
                            class="btn btn-primary btn-block w-75 my-4"
                        >Entrar</button>
                    </center>
                </form>
            </div>
        </div>
    </div>
</template>

<script src='./Login.js'></script>

<style scoped>

</style>
