import styled from "styled-components";

const Gage = (props) => {
  const { act } = props;

  return <Item act={act} />;
};

const Item = styled.div`
  display: inline-block;
  width: 7px;
  height: 45px;
  background: ${({ theme, act }) =>
    act === true ? theme.colors.mint : theme.colors.levelGray[1]};
  box-shadow: ${({ act }) => (act === true ? "0 0 5px #00e5e0" : "none")};
`;

export default Gage;
