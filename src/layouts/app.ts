import styled from 'styled-components'
import { colors } from './theme'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 10vh;
  background-color: #fff;

  @media (max-width: 768px) {
    height: auto; /* Allows container to grow in height */
    background-color: #fff;
  }

  @media (max-width: 480px) {
    background-color: #fff;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: #fff;

  border-radius: 8px;

  @media (max-width: 768px) {
    background-color: #fff;
  }

  @media (max-width: 480px) {
    background-color: #fff;
  }
`

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 16px;
  margin-bottom: 1rem;
  outline: none;
  &:focus {
    border-color: ${colors.yellow};
  }
`

export const Button = styled.button`
  padding: 0.8rem;
  font-size: 18px;
  color: #fff;
  background-color: ${colors.green};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${colors.yellow};
  }
`
