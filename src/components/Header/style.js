import styled from "styled-components";
import styles from "../../styles";

export const Container = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-size: 32px; */
  /* letter-spacing: -1px; */
  background: #FFF;
  

  filter: drop-shadow(0 1px 1px #d9d9d9);

`;

export const Menu = styled.nav`
  display: flex;
  justify-content: right;
  margin-right: 100px;
  width: 800px;
`

export const ImgContainer = styled.div`
  margin-left: 100px;
`;

export const MenuItem = styled.div`
  width: 200px;
  text-align: center;
  color: ${styles.primaryTextColor};

`