
import { useState, useEffect } from 'react'
import supabase from './utils/supabase'
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('todos').select()

      if (todos.length > 0) {
        setTodos(todos)
      }
      console.log(todos)
    }

    getTodos()
  }, [])

  return (
    <>
    <div>
      <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.todo}</li>
      ))}
      </ul>
    </div>
  </>
  )
}
export default App
