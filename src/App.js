import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddUser from './components/user/AddUser';
import Edit from './components/user/Edit';
import TableCon from './components/TableCon';
import Fboard from './components/Fboard';
import Eye from './components/user/Eye';
import Login from './components/user/Login';
export default function App() { 
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path = "/">
            <Fboard/>
              <div className="mt-5">
              <TableCon/>
              </div>
            </Route>
          <Route exact path = "/login">
            <Login/>
          </Route>
            <Route exact path = "/users/add">
              <div className="container mt-5">
                <AddUser/>
              </div>
            </Route>
            <Route exact path = {`/users/edit/:id`}>
              <div className="container mt-5">
                <Edit/>
              </div>
            </Route>
            <Route exact path = {`/users/:id`}>
              <div className="container mt-5">
                <Eye/>
              </div>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}