import styled from "styled-components"
import { TiDelete } from "react-icons/ti";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteTodo } from "../services/getTodosApi";

const FirstColumn = styled.div`
  display: flex;
  gap: 15px;
`;

const SecondColumn = styled.div`
  display: flex;
  gap: 65px;
`;

const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function TodoItem({todo, index}) {

  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: deleteTodo,
    onSuccess: ()=> {
      queryClient.invalidateQueries({
        queryKey: ['todos']
      })
      toast.success('Successfully deleted todo item.', {duration: 4000})
    }
  })

  function handleDelete(id){
    mutate(id)
  }
  return (
    <div>
      <Row>
        <FirstColumn>
          <p>{index + 1}</p>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </FirstColumn>
        <SecondColumn>
          <input type="checkbox" checked={todo.is_completed}/>
          <TiDelete style={{color:'red', fontSize: '20px'}} onClick={()=> handleDelete(todo.id)}/>
        </SecondColumn>
      </Row>
    </div>
  )
}
