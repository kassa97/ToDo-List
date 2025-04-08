import { useState } from "react";

type AddTodoProps = {
    onAddTodo: (title: string) => void;
};

function AddTodo ({onAddTodo}: AddTodoProps) {
    const [title, setTitle] = useState("");
    console.log("A");
    const handleAddClick = () => {
        
            onAddTodo(title);  // This should now work
            setTitle("");


    };
    return(
    <div>
      <input
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title.length === 0 && <small> Type a task to add</small>}
      <button
        onClick={() => {
        handleAddClick()
          
        }}
        disabled={title.length === 0}
      >
        Add Task
      </button>
    </div>
    )
}


export default AddTodo;