import Auth from "appkit/auth";

function registerAuth(container) {
  container.register('auth:main', Auth);
  container.register('authModule:main', Ember.Object.extend());

  container.injection('auth', 'module', 'authModule:main')

  container.injection('auth-module', 'auth', 'auth:main');
  container.injection('auth-request', 'auth', 'auth:main');
  container.injection('auth-response', 'auth', 'auth:main');
  container.injection('auth-session', 'auth', 'auth:main');
  container.injection('auth-strategy', 'auth', 'auth:main');

  container.injection('route', 'auth', 'auth:main');
}

export default registerAuth;
