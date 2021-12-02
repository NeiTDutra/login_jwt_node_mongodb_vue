/*
Description
*/

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmited: false,
    };
  },

  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },

  methods: {
    loginSubmitUserForm() {
      this.isSubmited = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      alert('SUCCESS:' + JSON.stringify(this.loginForm));
    },

    async submitLoginUser() {},
  },
};
