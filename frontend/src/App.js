import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nagigation from './components/Navegation'
import NoteList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import Quienessomos from './components/Quienessomos'
import Galeria from './components/Galeria'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Router>
      <Nagigation/>
      <Route path="/" exact component={NoteList} />
      <Route path="/edit/:id" component = {CreateNote} />
      <Route path="/creanotas" component ={CreateNote} />
      <Route path="/user" component = {CreateUser} />
      <Route path="/somos" component = {Quienessomos} />
      <Route path="/galeria" component = {Galeria} />
      <Route path="/entrar" component = {Login} />
    </Router>
  );
}

export default App;
