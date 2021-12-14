export const createScript = () => {
  // load the Google SDK
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/platform.js';
  script.async = true;
  script.onload = initGapi;
  document.body.appendChild(script);
};

const initGapi = () => {
  // init the Google SDK client
  const g = window.gapi;
  g.load('auth2', function () {
    g.auth2.init({
      client_id:
        '840366682066-3kqpbk0g6hieeou1amu7oim9n44o118m.apps.googleusercontent.com',
      // authorized scopes
      scope: 'profile email openid',
    });
  });
};
