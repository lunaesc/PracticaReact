import { useState } from "react";
import styled from "styled-components"


const ItemUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;


const ListItemLi = styled.li<{ isActive: boolean }>`
    position: relative;
    display: block;
    padding: 0%.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: ${(props) => (props.isActive ? "#083b75" : "#0a54b4")};
  color: ${(props) => (props.isActive ? "white" : "black")};
    border: 1px solid rgba(39, 22, 22, 0.125);
    transition: background-color 0.25s ease-in-out;

    &:first-child {
        border-top-left-radius: 0.25px;
        border-top-right-radius: 0.25px;
    }
`;

function ListGroup() {
const items = ["New York", "San Francisco", "Tokio", "London"]
const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
        <ItemUl>
            <h1>List</h1>
            
            {items.map((item, index) => (
  <ListItemLi
    key={index}
    isActive={selectedIndex === index}
    onClick={() => setSelectedIndex(index)}
  >
    {item}
  </ListItemLi>
))}

        </ItemUl>
    </>
  )
}

export default ListGroup