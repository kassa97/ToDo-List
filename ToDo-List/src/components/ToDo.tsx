import { useState } from "react";
import AddTodo from "./AddToDo.tsx";
import ToDosList from "./ToDosList.tsx";


export type Todo = {
    id: number;
    title: string;
    done: boolean;
 };
let nextId = 1;
const initialTodos: Todo[] = [{ id: 0, title: "ToDo Example", done: true}];



 export type TodoAppProps = {
     todoDefinition: Todo[];
     onDeleteToDo: (todoId: number) => void;
     onChangeToDo: (nextTodo: Todo) => void;
     }

 export type TodoItemProps = {
     data: Todo;
     onDeleteToDo: (todoId: number) => void;
     onChangeToDo: (nextTodo: Todo) => void;
     }

function ToDo() {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    function addToDo(title: string) {
        const newTodo: Todo = {
            id: nextId++,
            title: title,
            done: false,
        };
        setTodos(
            [...todos, newTodo]
        );
        console.log("B");
    }
    
    function deleteToDo(todoId: number) {
        setTodos(
         todos.filter(todo => todo.id !== todoId)
        )
    }

    function editToDo(nextTodo: Todo) {
        setTodos(
            todos.map((todo)=> {
                if(todo.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return todo;
                }
            })
        );
    }

    return(

        
        <div>
            <h1>ToDo List</h1>
            <AddTodo onAddTodo={addToDo}/>
             <ToDosList
                todoDefinition={todos}
                onDeleteToDo={deleteToDo}
                onChangeToDo={editToDo}
                />
             </div>
             
             );
}
export default ToDo;