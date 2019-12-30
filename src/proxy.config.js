const proxy = [
    {
        "/v1/*": {
          "target": "http://test.adopets.app/",
          "secure": false,
          "logLevel": "debug",
          "changeOrigin": true
        }
      }
  ];
  module.exports = proxy;