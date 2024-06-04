import { useQuery } from '@tanstack/react-query'
import { getTodosApi } from '../services/getTodosApi'
import TodoItem from './TodoItem'

export default function TodoList() {

  const todos = useQuery({
    queryKey: ['todos'],
    queryFn: getTodosApi
  })

  console.log(todos?.data)
  return (
    <ul>
      {todos?.data?.map((todo, index )=> <TodoItem todo={todo} key={todo.id} index={index}/>)}
    </ul>
  )
}
