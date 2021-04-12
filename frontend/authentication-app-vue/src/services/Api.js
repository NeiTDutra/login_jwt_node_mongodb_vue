/**
 * file: src/services/Api.js
 * description: file responsible for application frontend base url
 * data: 12/04/2021
 * author: Nei Thomassin Dutra
 * forked: from https://github.com/glaucia86/jwt-node-vue
 * ==> from https://www.youtube.com/watch?v=Vr-UMoAv8pk&list=PLb2HQ45KP0Ws0Zy6PHquJhBIaGLKcLaf6&index=2
 */

import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});
