module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'my_react_app',
      script    : 'npm',
      args      : 'start',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ]
}
