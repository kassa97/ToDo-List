import { useState } from "react";
import {TodoItemProps} from "./ToDo.tsx";

function ToDoItem(itemProp: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(itemProp.data.title);

    const handleEdit = () => {
        setIsEditing(true);
      };
    
      const handleSave = () => {
        itemProp.onChangeToDo({
          ...itemProp.data,
          title: editValue
        });
        setIsEditing(false);
      };

      const handleCancel = () => {
        setEditValue(itemProp.data.title);
        setIsEditing(false);
      };
    return (
        
        <div className="todo-item">
      <input
        type="checkbox"
        checked={itemProp.data.done}
        onChange={(e) => itemProp.onChangeToDo({
          ...itemProp.data,
          done: e.target.checked
        })}
      />
      
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span className={itemProp.data.done ? "completed" : ""}>
            {itemProp.data.title}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => itemProp.onDeleteToDo(itemProp.data.id)}>Delete</button>
        </>
      )}
    </div>

    )



    }
export default ToDoItem;