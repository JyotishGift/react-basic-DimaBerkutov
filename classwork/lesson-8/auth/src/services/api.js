const url = 'http://api.jyotish.gift/api/v1' || process.env.BASE_URL;
class Api {
  constructor(url) {
    this.url = url;
  }

  signIn(userData) {
    const userURL = '/auth/login';
    return window
      .fetch(url + userURL, {
        headers: {
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then(data => data.json());
  }
}

export default new Api(url);
