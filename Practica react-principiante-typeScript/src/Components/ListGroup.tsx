import styled from "styled-components"

const ItemUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;


const ListItemLi = styled.li`
    position: relative;
    display: block;
    padding: 0%.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(39, 22, 22, 0.125);
    transition: background-color 0.25s ease-in-out;

    &:first-child {
        border-top-left-radius: 0.25px;
        border-top-right-radius: 0.25px;
    }
`;

function ListGroup() {
  return (
    <>
        <ItemUl>
            <ListItemLi >An item</ListItemLi>
            <ListItemLi >A second item</ListItemLi>
            <ListItemLi >A third item</ListItemLi>
            <ListItemLi >A fourth item</ListItemLi>
            <ListItemLi >And a fifth one</ListItemLi>

        </ItemUl>
    </>
  )
}

export default ListGroup