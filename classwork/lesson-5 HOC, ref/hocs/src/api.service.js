class Api {
  constructor() {
    this.headers = {};
    // WHATWG URL
    this.url =
      'https://api.randomuser.me/?nat=us,gb&results=50';
  }
  getUsers() {
    // 1 
    return fetch(this.url).then(data => data.json());
    // return fetch(this.url).then(data => data.json());
  }
}

export default new Api();
