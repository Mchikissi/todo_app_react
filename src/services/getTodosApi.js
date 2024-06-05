import supabase from "./supabase";

export async function getTodosApi(){

  
  let { data: todos, error } = await supabase
  .from('todos')
  .select('*')

  if(error){
    console.log('Unable to Fetch todos!');
  }

  return todos
}

export async function createTodo(todo){
  
  const { error } = await supabase
  .from('todos')
  .insert([
    todo,
  ])
  .select()

  if(error){
    console.log('Could not create todo!')
  }


}

export async function deleteTodo(id){
  
  const { error } = await supabase
  .from('todos')
  .delete()
  .eq('id', id)

  if(error){
    console.log('Could not delete todo item');
  }

}