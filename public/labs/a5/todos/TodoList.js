import TodoItem from "./TodoItem.js";
import todoes from "./todos.js";
const TodoList = () => {
  return(`
       <ul>
           ${
              todoes.map(todo => {
                return(TodoItem(todo));
              }).join('')
            }
       </ul>
   `);
}
export default TodoList;