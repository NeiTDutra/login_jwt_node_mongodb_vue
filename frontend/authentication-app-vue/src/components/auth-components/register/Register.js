/*
Description
*/

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
      },
      isSubmited: false,
    };
  },

  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required },
    },
  },

  methods: {
    registerSubmitUserForm() {
      this.isSubmited = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      alert('SUCCESS:' + JSON.stringify(this.registerForm));
    },

    async submitRegisterUser() {},
  },
};
