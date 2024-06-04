import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import Status from "./Status";

const StyledLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 50px;
  background-color: #fff2d7;
  font-family: 'Poppins';
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  margin-top: 20px;
`;

const Action = styled.p`
  font-size: 18px;
  color: #3a3a3a;
  font-weight: 600;
`;
export default function AppLayout() {
  return (
    <StyledLayout>
      <Heading>Todo App</Heading>
      <Form/>
      <Status/>
      <ActionRow>
      <Action>Done</Action>
      <Action>Delete</Action>
      </ActionRow>
      <Outlet/>
    </StyledLayout>
  )
}
