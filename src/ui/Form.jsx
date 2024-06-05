import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import { createTodo } from "../services/getTodosApi";
import toast from "react-hot-toast";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
`;

const Input = styled.input`
  padding: 11px 15px;
  background-color: #f8c794;
  border-radius: 10px;
  color: #3a3a3a;
  border: none;

  &:focus{
    background-color: transparent;
  }
`;

const Button = styled.button`
  padding: 11px 65px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  color: #222222;
  background-color: #f8c794;

  &:hover{
    cursor: pointer;
    background-color: #d8ae7e;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ErrorMessage = styled.div`
  font-size: 10px;
  background-color: #ffcdd2;
  color: #d32f2f;
  padding: 3px 6px;
  border-radius: 3px;
`;
export default function Form() {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues:{
      title: '',
      description: ''
    }
  })

  console.log(errors);

  const queryClient = useQueryClient();

  const {mutate, isLoading} = useMutation({
    mutationFn: createTodo,
    onSuccess: ()=> {
      toast.success('Todo added successfully')
      queryClient.invalidateQueries({
        queryKey: ['todos']
      })
      reset();
    }
  })

  function onSubmit(data){
    console.log(data.title)
    const todo = {
      title: data.title,
      description: data.description,
      is_completed: false
    }

    mutate(todo);
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Row>
      <Input placeholder="Title" style={{width: '350px'}} {...register('title', {required: 'Please Enter the title'}, {minLength:2})}/>
      {errors?.title?.type === 'required' && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      </Row>
      <Row>
      <Input placeholder="Description" style={{width: '480px'}} {...register('description', {required: 'Please Enter the description'}, {minLength: 2})}/>
      {errors?.description?.type === 'required' && <ErrorMessage>{errors.description.message}</ErrorMessage>}
      </Row>
      <Button >Add</Button>
    </StyledForm>
  )
}
