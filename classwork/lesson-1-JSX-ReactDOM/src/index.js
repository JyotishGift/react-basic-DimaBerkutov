import React from 'react';

import ReactDOM from 'react-dom';

const mountNode = document.querySelector('.app');

// // сделать компонент Hello

// const Hello = props => {
//   return (
//     <div>
//       <h1>
//         {props.count}
//       </h1>
//       <div>Privet</div>
//       <div />
//     </div>
//   );
// };

// // react рендерит 1 раз

// /*
// Любые изменения в компоненте, реакт хочет об этих изменениях знать

// */

// /*
// 1. Компонент всегда первую заглавную букву
// 2. Должен содержать JSX
// 2. Один компонент, возвращает 1 тэг с
// неограниченым уровнем вложенности
// */

// // ваше имя в props и отображает его на странице

// const render = Component => {
//   console.log(Component);
//   ReactDOM.render(Component, mountNode);
// };

// render(<Hello />);
// // render(<Hello />);

// const state = {
//   count: 0
// };
// setInterval(() => {
//   state.count++;
//   console.log(state.count);
//   render(<Hello count={state.count} />);
// }, 500);

// /*
//   создание компонента - это создание "своего" DOM тэга(элемента)
// */

// /*
//  подобно HTML
//  мы можем добавлять события JS

//  html
//   onclick
//  JSX
//   onClick

//  html
//   class
//  JSX
//   className

// */

let someArray = ['Angular', 'Vue', 'React'];

const List = ({ arr }) => {
  const arrOfReactElements = null;
  const arrItems = [1, 1, 3];
  // при сортировке, достаточно сортировать ключи
  return (
    <ul>
      {arr.map(framework => {
        return (
          <li key={framework}>
            {framework}
          </li>
        );
      })}
    </ul>
  );
};

ReactDOM.render(<List arr={someArray} />, mountNode);

// /*
//  <ul>
//    <li>Angular</li>
//    <li>Vue</li>
//    <li>React</li>
//  </ul>
// */
