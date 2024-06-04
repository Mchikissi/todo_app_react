import styled from "styled-components"

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
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
export default function Form() {
  return (
    <StyledForm>
      <Input placeholder="Title" style={{width: '350px'}}/>
      <Input placeholder="Description" style={{width: '480px'}}/>
      <Button>Add</Button>
    </StyledForm>
  )
}
