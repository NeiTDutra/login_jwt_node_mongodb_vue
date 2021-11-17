<template>
    <div class="container text-center">
        <h1>Login Page</h1>
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                <form
                    class="text-center border border-primary p-5"
                    style="margin-top:70px; height;auto; padding-top:100px !important;"
                    v-on:submit.prevent="loginSubmitUserForm()"
                >
                    <input
                        type="email"
                        class="form-control mb-5"
                        name="email"
                        id="email"
                        placeholder="Digite seu E-mail"
                        v-model="loginForm.email"
                    />
                    <input
                        type="password"
                        class="form-control mb-5"
                        name="password"
                        id="password"
                        placeholder="Digite seu Password"
                        v-model="loginForm.password"
                    />
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
