import styled from "styled-components";
import styles from "../../styles";

export const StyledButton = styled.button`
  width: 250px;
  background: ${styles.primaryColor};
  border-radius: 10px;
  padding: 15px;
  color: ${styles.secondaryTextColor};
  font-size: 16px;
  letter-spacing: -1px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: white;
    border: 1px solid ${styles.primaryColor};
    color: ${styles.primaryColor};
  }

  &:active {
    border: 1px solid ${styles.secondaryColor};
    color: ${styles.secondaryColor};
  }
`