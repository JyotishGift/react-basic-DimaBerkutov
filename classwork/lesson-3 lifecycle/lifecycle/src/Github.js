import React from 'react';
import RepoItem from './RepoItem';

const url =
  'https://api.github.com/users/oleglustenko/repos';
class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillRecieveProps() {
    // К нам пришли новые пропсы -> Не рисуем
    // init -> runtime
    // 1. state - верхнем уровне - App
    // 2. !state! -> props -> shouldUpdate   - VideoComponent
  }

  componentDidMount() {
    fetch(url).then(data => data.json()).then(data => {
      // data = { key: value, key1: value1, }
      console.log(data);
      this.setState({ data: data });
    });
  }

  render() {
    if (!this.state.data.length) {
      return <div>Loading...</div>;
    }
    return (
      <ul>  
        {this.state.data.map((elem, index) => {
          return (
            <RepoItem
              name={elem.name}
              fullname={elem.fullname}
              id={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default Github;
