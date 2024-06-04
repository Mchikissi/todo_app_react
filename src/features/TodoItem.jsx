import styled from "styled-components"
import { TiDelete } from "react-icons/ti";

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
          <TiDelete />
        </SecondColumn>
      </Row>
    </div>
  )
}
