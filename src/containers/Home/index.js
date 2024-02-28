import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Inputlabel,
  Input,
  Button,
} from "./styles"


function App() {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3000/users", { 
      name: inputName.current.value, 
      age: inputAge.current.value,
    });
  
    
    setUsers([ ...users, newUser ])

    navigate("/usuarios")

  }


  return (

    <Container>
      <Image alt='logo-imagem' src={ People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <Inputlabel>Nome</Inputlabel>
        <Input ref={inputName} placeholder='Nome' />

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>
          Cadastrar  <img alt='seta' src={Arrow} />
        </Button>

      
      </ContainerItens>

    </Container>
  )

}

export default App