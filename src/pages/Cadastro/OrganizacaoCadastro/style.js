import styled from "styled-components";
import styles from "../../../styles";
import { Form, Input } from "antd";

export const Container = styled.div`
  padding: 110px 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-explain {
    font-size: 12px;
  }
`

export const StyledInput = styled(Input)`
  letter-spacing: -1px;
`