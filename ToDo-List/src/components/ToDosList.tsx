import {TodoAppProps} from "./ToDo.tsx";
import { useState } from "react";
import ToDoItem from "./ToDoItem.tsx";

function ToDosList(todoAppProps: TodoAppProps  ){
    let todos = todoAppProps.todoDefinition;
    //console.log(todoAppProps)
      return(
        <>{todos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem
                data={todo}
                onDeleteToDo={todoAppProps.onDeleteToDo}
                onChangeToDo={todoAppProps.onChangeToDo}
              />
            </li>
          ))}</>
      )


    }

    export default ToDosList;