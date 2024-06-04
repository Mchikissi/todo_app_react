import styled from "styled-components";
import Row from "./Row";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
&:link,
  &:visited {
    border: none;
    border-radius: 10px;
    padding: 6px 20px;
    font-size: 18px;
    color:  #3a3a3a;
    background-color: #f8c794;
    text-decoration: none;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    cursor: pointer;
    background-color: #d8ae7e;
  }
`;

export default function Status() {
  return (
    <Row>
      <StyledNavLink to='pending'>Pending</StyledNavLink>
      <StyledNavLink to='completed'>Completed</StyledNavLink>
    </Row>
  )
}
