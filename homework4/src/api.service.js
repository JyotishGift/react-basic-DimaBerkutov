import axios from 'axios';
class Api {
  state = {
    data: '',
    login: '',
    password: ''
  };
  signInUp(reqestBody, request){
    const url = 'http://api.jyotish.gift/api/v1/auth/';
    axios.post(url + request, reqestBody)
    .then(response => {
      console.log('reqestBody', reqestBody);
      if(response.status === 200) alert('Successfully logged in!');
      else return alert('Error:', response);
    })
    .catch(e =>{
      console.log(e);
    });
  }
}

export default new Api();
