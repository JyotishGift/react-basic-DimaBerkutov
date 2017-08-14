import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../css/style.css';

let TableTr = (str, val) => {
    return (<tr>
                <td>{str.str}</td>
                <td>{val.val}</td>
            </tr>
    )
};
let PanelInfo = (props) => {
    return (
            <div className="panel panel-info">
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
                                        {<TableTr str = "Дата рождения" val = "24.10.2016"/>}
                                        {<TableTr str = "Пол" val = "MALE"/>}
                                        {<TableTr str = "Адрес" val = "GOOGLE STREET"/>}
                                        {<TableTr str = "Email" val = "EMAIL"/>}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

let Button = () => {
    return <button type="button" className="button">Add user</button>
};

const Main = (newUser) => {
    console.log('newUser.user', newUser.user)
    return (
        <div>
            {/* {...newUser.user} */}
            {<PanelInfo name = "USER FULL NAME !" />}
            {<Button />}
        </div>
    )
};

const mountNode = document.body.querySelector('.app');
ReactDOM.render(<Main  user = ""/>, mountNode);

const buttonClick = document.querySelector('.button').addEventListener('click', () => {
    let users = document.querySelectorAll('.panel.panel-info');
    ReactDOM.render(<Main  user = {users}/>, mountNode);
});