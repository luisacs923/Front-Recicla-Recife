import styled from "styled-components";
import { Card } from "antd";
import styles from "../../styles";

export const StyledCard = styled(Card)`
  .ant-card-head {
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
    .ant-card-head{
      background-color: ${styles.primaryColor};
      color: ${styles.secondaryTextColor};
    }
  }
`