import styled from "styled-components";
import banner from "../../assets/Banner.png"

export const ChamadaContainer = styled.div`
  background-image: url(${banner}); 
  background-size: cover;
  height: 90vh;
  width: 100%;
`

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -1px;
`

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Button = styled.button`
  width: 250px;
  background: #14AE5C;
  border-radius: 10px;
  padding: 15px;
  color: white;
  font-size: 16px;
  letter-spacing: -1px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: white;
    border: 1px solid #14AE5C;
    color: #14AE5C;
  }

  &:active {
    border: 1px solid #0c6938;
    color: #0c6938;
  }
`