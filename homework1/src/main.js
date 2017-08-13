import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../css/style.css';

let tableTr = (str, val) => {
    return (<tr>
                <td>{str}</td>
                <td>{val}</td>
            </tr>
    )
};
let PanelInfo = (props) => {
    let userInfo = ['Дата рождения', 'Пол', 'Адрес', 'Email'];
    return (<div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">{props.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div>
                            <div className="col-md-3 col-lg-3 " style={{textAlign:"center"}}>
                                <img src="http://psdexport.com/storage/avatars/default.png" className="pull-left"/>
                            </div>
                            <div className=" col-md-9 col-lg-9">
                                <table className="table table-user-information">
                                    <tbody>
                                        {tableTr('Дата рождения', '24.10.2016')}
                                        {tableTr('Пол', 'MALE')}
                                        {tableTr('Адрес', 'GOOGLE STREET')}
                                        {tableTr('Email', 'EMAIL')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};
let Page = () => {
    let page;
    return page = <PanelInfo name = "USER FULL NAME !"/>;
};
const Button = document.querySelector('.button').addEventListener('click', () => {let page;
    console.log('click')
    return <Page />, mountNode
});
const mountNode = document.body.querySelector('.app');
ReactDOM.render(<Page />, mountNode);