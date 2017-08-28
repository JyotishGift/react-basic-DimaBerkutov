
class Api {
  constructor(){
    this.state = {
      data: '',
      login: '',
      password: ''
    };
    console.log('url', this.url)
    // this.signInUp();
  }
  // componentWillMount(){
  //   fetch(this.url).then(data => data.json()).then(data => {
  //     this.setState({data: data});
  //     console.log('data', data)
  //   });
  // }
//   signInUp(email, name, pass, request){
//     return fetch(`${this.url}`, 'POST').then(data=>data.json()).then(data=>console.log(data)).catch(e=>console.log(e));
//   }
signUp(email, name, pass, request){
    const url = 'http://api.jyotish.gift/api/v1/auth/';
    console.log('signIn', email, name, pass, url + request);
    return fetch(url + request, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: `dima@berkutov.com`,
          user: 'DimaBerkutov',
          password: 'qqqqwwww'
        })
    }).then(response => {
        if(response.status === 200) alert('Successfully logged in!');
        else return alert('Error:', response);
    }).catch(e => {
        console.log(e);
    });
  }
  signIn(name, pass, request){
    const url = 'http://api.jyotish.gift/api/v1/auth/';
    console.log('signIn',name, pass, url + request);
    return fetch(url + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: 'sa',
          password: 'admin'
        })
    }).then(response => {
        if(response.status === 200) alert('Successfully logged in!');
        else return alert('Error:', response);
    }).catch(e => {
        console.log(e);
    });
  }
}

const api = new Api();
export default api;
