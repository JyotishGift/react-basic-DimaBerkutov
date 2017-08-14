import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../css/style.css';

// user info
let TableTr = (str) => {
    return (<tr>
                <td>{str.str}</td>
                <td>{str.value}</td>
            </tr>
    )
};

let id = 0;
// user block
let PanelInfo = (props) => {
    return (
            <div>
                <div    className="panel panel-info">
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
                                            <TableTr str = "Дата рождения" value = "24.10.2016"/>
                                            <TableTr str = "Пол" value = "MALE"/>
                                            <TableTr str = "Адрес" value = "GOOGLE STREET"/>
                                            <TableTr str = "Email" value = "EMAIL"/>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id = {props.val}></div>
            </div>
    )
};
// button
let Button = () => {
    return <button type="button" className="button">Add user</button>
};

// render
const Main = () => {
    return (
        <div>
            <PanelInfo name = "USER FULL NAME !" val = {id}/>
            <Button />
        </div>
    )
};
const mountNode = document.body.querySelector('.app');
ReactDOM.render(<Main />, mountNode);

// click
const buttonClick = document.querySelector('.button').addEventListener('click', () => {
    const newBlock = document.getElementById(id);
    id++;
    ReactDOM.render(<PanelInfo  val = {id}/>, newBlock);
});