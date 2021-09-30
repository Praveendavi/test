import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.is_odd ? "row-reverse" : "row")};
`;
