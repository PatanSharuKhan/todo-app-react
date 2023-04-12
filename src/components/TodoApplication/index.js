import {FiEdit} from 'react-icons/fi'
import {useState} from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {v4 as uuidv4} from 'uuid'
import {
  Container,
  Heading,
  Card,
  InputContainer,
  AddButton,
  Ul,
  Li,
  Radio,
  TitleAndCheck,
  ActionItems,
  Footer,
  ClearButton,
  ActionButton,
  InputDiv,
  Content,
  P,
} from './styledComponents'

const TodoApplication = () => {
  const [userInput, setUserInput] = useState('')
  const [inputList, setInputList] = useState([])
  //   updating the user Input
  const updateUserInput = event => {
    setUserInput(event.target.value)
  }
  //   adding item into list
  const updateList = () => {
    if (userInput === '') {
      alert('Task should not be empty')
    } else {
      const obj = {
        id: uuidv4(),
        text: userInput,
        isChecked: false,
      }
      const updatedList = [obj, ...inputList]
      setInputList(updatedList)
    }
  }
  //   rendering list items
  const renderListItems = () => {
    const code = inputList.map(each => {
      const deleteItem = () => {
        const updatedList = inputList.filter(item => item.id !== each.id)
        setInputList(updatedList)
      }
      const updateRadio = () => {
        const updatedList = inputList.map(item => {
          if (item.id === each.id) {
            return {...each, isChecked: !item.isChecked}
          }
          return item
        })
        setInputList(updatedList)
      }
      const editItem = () => {
        setUserInput(each.text)
      }
      return (
        <Li key={each.id}>
          <TitleAndCheck>
            <Radio
              type="radio"
              //   checked={each.isChecked}
              onClick={updateRadio}
            />
            <P status={each.isChecked}>{each.text}</P>
          </TitleAndCheck>
          <ActionItems>
            <ActionButton>
              <FiEdit color="blue" onClick={editItem} />
            </ActionButton>
            <ActionButton>
              <RiDeleteBin6Line color="red" onClick={deleteItem} />
            </ActionButton>
          </ActionItems>
        </Li>
      )
    })
    return code
  }
  //   rendering active todo count
  const getActiveTodo = () => {
    let count = 0
    inputList.map(each => {
      if (!each.isChecked) {
        count += 1
      }
      return each
    })
    return count
  }
  //   rendering clear all button
  const clearList = () => {
    setInputList([])
  }

  return (
    <Container>
      <Card>
        <Content>
          <Heading>Todo App</Heading>
          <InputDiv>
            <InputContainer
              value={userInput}
              placeholder="Add your new todo"
              onChange={updateUserInput}
            />
            <AddButton onClick={updateList}>+</AddButton>
          </InputDiv>
          <Ul>{renderListItems()}</Ul>
        </Content>
        <Footer>
          <p>You have {getActiveTodo()} pending tasks</p>
          <ClearButton onClick={clearList}>ClearAll</ClearButton>
        </Footer>
      </Card>
    </Container>
  )
}

export default TodoApplication
