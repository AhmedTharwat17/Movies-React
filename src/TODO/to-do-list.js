import React , { useState } from "react"

 function ToDo(){
    const [todos, setTodos] = useState([]);

    const [value, setValue] = useState("");

      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
      
      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
      };

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      const removeAllTodo = () => {
        setTodos([]);
      };

      const addClick = () => {
        if (!value) return;
        addTodo(value);
        setValue("");
      };

     return(
         <React.Fragment>
            <div className="container" style={{margin:'230px 100px'}}>
                <div class="input-group">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" class="form-control" placeholder="Add Notes"/>
                    <button onClick={addClick} class="btn btn-outline-secondary" type="button">Add</button>
                    <button onClick={removeAllTodo} class="btn btn-outline-secondary" type="button">Delete All</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Note</th>
                        <th scope="col">Complete</th>
                        <th scope="col">delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo, index) => {
                        return(<tr>
                        <td style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</td>
                        <td><button class="btn btn-primary" onClick={() => completeTodo(index)}>Complete</button></td>
                        <td><button class="btn btn-primary" onClick={() => removeTodo(index)}>x</button></td>
                        </tr>)
                    })}
                    </tbody>
                    </table>
                </div>
            </React.Fragment>
    )
 }
 export default ToDo;