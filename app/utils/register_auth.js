var EmberAuth = window.EmberAuth;

function registerAuth() {
  EmberAuth.registerOps({
    baseUrl: 'http://localhost:5000/api'
  });
}

export default registerAuth;
