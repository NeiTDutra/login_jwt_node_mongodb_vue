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
                    <div class="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control mb-5"
                            placeholder="Inclua seu nome completo"
                            v-model="registerForm.name"
                            :class="{
                                'is-invalid': isSubmited && $v.registerForm.name.$error,
                            }"
                        />
                            <div
                                v-if="isSubmited && !$v.registerForm.name.required"
                                class="invalid-feedback"
                            >
                                O campo nome é obrigatório!
                            </div>
                    </div>

                    <div class="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control mb-5"
                            placeholder="Inclua seu E-mail"
                            v-model="registerForm.email"
                            :class="{
                                'is-invalid': isSubmited && $v.registerForm.email.$error,
                            }"
                        />
                            <div
                                v-if="isSubmited && !$v.registerForm.email.required"
                                class="invalid-feedback"
                            >
                                O campo e-mail é obrigatório!
                            </div>
                    </div>

                    <div class="form-group">
                        <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control mb-5"
                        placeholder="Inclua seu password"
                        v-model="registerForm.password"
                        :class="{
                            'is-invalid': isSubmited && $v.registerForm.password.$error,
                        }"
                    />
                        <div
                            v-if="isSubmited && !$v.registerForm.password.required"
                            class="invalid-feedback"
                        >
                            O campo password é obrigatório!
                        </div>
                    </div>

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
