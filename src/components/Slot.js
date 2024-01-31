import styled from "styled-components";

const Container = styled.div`
  .slot {
    height: 100%;
    width: 100%;
    object-fit: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  /* .slot > *{
    margin: 5px;
} */
  .active {
    background-color: green;
  }
`;

export default function Slot({ date, day, isActive }) {
  return (
    <Container>
      <div className={`slot ${isActive ? "active" : ""} `}>
        <h4>{date}</h4>
        <h4>{day}</h4>
      </div>
    </Container>
  );
}
