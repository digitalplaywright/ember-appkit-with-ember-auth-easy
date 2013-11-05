var EmberAuth = window.EmberAuth;

function registerAuth() {
  EmberAuth.registerOps({
    baseUrl: 'http://localhost:3000/'
  });
}

export default registerAuth;
