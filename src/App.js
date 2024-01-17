import React from 'react'

import {Container, H1, Image, ContainerItens, Inputlabel, Input, Button} from "./styles"


function App  ()  {

  return (

    <Container>
      <Image />
      <ContainerItens>
      <H1>Olá!</H1>

      <Inputlabel>Nome</Inputlabel>
      <Input placeholder='Nome' />

      <Inputlabel>Idade</Inputlabel>
      <Input placeholder='Idade' />

      <Button>Cadastrar</Button>
      </ContainerItens>

      </Container>
  ) 

}

export default App