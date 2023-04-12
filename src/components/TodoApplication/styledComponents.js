import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Card = styled.div`
  width: 450px;
  padding: 40px;
  height: 80vh;
  margin-top: 10vh;
  box-shadow: 0px 4px 12px 0px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading = styled.h1`
  font-size: 25px;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputContainer = styled.input`
  font-size: 20px;
  padding: 5px;
  height: 40px;
  flex-grow: 1;
`
export const AddButton = styled.button`
  color: white;
  height: 40px;
  width: 40px;
  font-size: 30px;
  margin-left: 10px;
  background-color: blue;
  border-width: 0px;
  cursor: pointer;
`
export const Ul = styled.ul`
  padding-left: 0px;
  height: 300px;
  overflow-y: auto;
`
export const Li = styled.li`
  height: 40px;
  background-color: lightgray;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`
export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  accent-color: rgb(0, 255, 0);
`
export const ActionItems = styled.div`
  display: flex;
  align-items: center;
`
export const TitleAndCheck = styled.div`
  display: flex;
  align-items: center;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ClearButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: blue;
  color: white;
`
export const ActionButton = styled.button`
  border: 0px;
  height: 40px;
  margin-right: 6px;
  background-color: transparent;
  color: ${props => props.color};
`
export const Content = styled.div``

export const P = styled.div`
  text-decoration: ${props => (props.status ? 'line-through' : 'none')};
`
