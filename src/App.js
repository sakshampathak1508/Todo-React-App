import './App.css';
import {Header} from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos}from "./MyComponents/Todos";
import {AddTodo}from "./MyComponents/AddTodo";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (task,detail)=>{
      let sno;
      if (todos.length===0){
        sno=1;
      }
      else{
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo={
        sno: sno,
        title: task,
        desc: detail,
      }
      setTodos([...todos,myTodo])
  }

  const [todos,setTodos] = useState([
    
  ])
  return (
    <>
      <Router>
        <Header title="MyTodo's List" searchbar={false} />
        {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch> */}
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
