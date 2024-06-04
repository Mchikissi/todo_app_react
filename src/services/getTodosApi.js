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