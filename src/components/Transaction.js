import styled from "styled-components";

function Transaction({ type, date, description, value }) {
  return (
    <>
      <Transition>
        <div>
          <Spam> {date + "  "}</Spam>
          <div>
            <p>{description} </p>
          </div>
        </div>
        <Type color={type === "deposit" ? "green" : "red"}>
          {value.toFixed(2).replace(".", ",")}
        </Type>
      </Transition>
    </>
  );
}

const Transition = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  div {
    display: flex;
    word-wrap: break-word;
    overflow: hidden;
    p {
      text-overflow: ellipsis;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

const Spam = styled.div`
  display: inline;
  color: var(--date_color);
  width: 60px;
`;

const Type = styled.li`
  color: ${(props) => props.color};
`;

export default Transaction;
