import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";


function Users() {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3000/users")

      setUsers(newUsers)

    }

    fetchUsers()
  }, [])
   
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`)

    const newUsers = users.filter( user => user.id !== userId) 
    
    setUsers(newUsers)
  }

  function goBackpage(){
    navigate("/")
  }


  return (

    <Container>
      <Image alt='logo-imagem' src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p> {user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lats-de-lixo' />
              </button>
            </User>

          ))
          }
        </ul>

  
        <Button onClick={goBackpage}>
        <img alt='seta' src={Arrow} />Voltar
        </Button>

      </ContainerItens>

    </Container>
  )

}

export default Users;