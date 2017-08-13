import React from 'react';
import ReactDOM from 'react-dom';
// const helloWorld = React.createElement('h1', null, `Hello world`);

// const Tree = React.createElement(
//     'div',
//     null,
//     React.createElement('h1', null, `Hello`),
//     React.createElement('h2', null, 'helloWorld')
// );

const mountNode = document.querySelector('.app');

let someArr = ['Angular', 'React', 'Vue'];
let newArr = someArr.map((elem, index) => {
    return (
        <ul>
            <li key = {index}>
                {elem}
            </li>
        </ul>
    )
})
let ReactComponent = (props) => {
    return (
        <div>
            <h1>
                {props.name}: {props.language}
            </h1>
            <div>
                {newArr}
            </div>
        </div>
    );
};
// let state = {
//     counter: 0
// };
// let timer = setInterval(() => {
//     counter.state++
//     console.log(counter.state)
//     return counter.state ++
// }, 1000);
ReactDOM.render(<ReactComponent name ="Dima Berkutov" language="javaScript"/>, mountNode);
