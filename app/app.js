import Resolver from 'resolver';
import registerComponents from 'appkit/utils/register_components';
import Auth from "appkit/auth";

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});


// TODO: Why is this necessary?  This is very surprising.
App.initializer({
  name: 'Register Ember Auth Components',
  initialize: function(container, application) {
    registerAuth(container);
  }
});

export default App;
