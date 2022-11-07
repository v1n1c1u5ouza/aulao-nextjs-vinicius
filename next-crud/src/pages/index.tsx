import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Charts from '../components/Chart'
import Client from '../core/Client'
import Button from '../components/Button'
import Form from '../components/Form'
import { useState } from 'react'

export default function Home() {

  const Clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  const [client, setClient] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState< 'chart' | 'form' >('chart')

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  function deleteClient(client: Client) {
    console.log(`Excluir... ${client.name}`)
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  function saveClient(client: Client) {
    console.log(client)
    setVisible('chart')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-purple-900
      text-white
    `}>
      
      <Layout title="Cadastro Simples">
        {visible === 'chart' ? (
      <>
        <div className="flex justify-end">
        <Button cor='purple' className={`mb-4`}
        onClick={newClient}>
          Novo Cliente
        </Button>
        </div>
        {<Charts clients={Clients} 
        selectedClient={selectedClient}
        deleteClient={deleteClient}
        ></Charts>}
      </>
        ) : (
          <Form client={client} 
            clientChange={saveClient}
            canceled={() => setVisible('chart')}
          />
        )}
      </Layout>
    </div>
  )
}
