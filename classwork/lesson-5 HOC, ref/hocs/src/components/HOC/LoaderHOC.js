import React, { Component } from 'react';

const LoaderHOC = props => WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      console.log(this.props);
      return !this.props.users.length
        ? <div style={{ width: '600px' }}>Loading</div>
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoaderHOC;

/* <main> </main>
 мы оборачиваем и устанавливаем width=600px;

 написать HOC, который оборачивает компонент в 
 тэг main и устанавливает ширину 600
  
  <main>
   <WrappedComponent />
  </main> 
*/
