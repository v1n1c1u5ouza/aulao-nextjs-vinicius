import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Charts from '../components/Chart'
import Client from '../core/Client'
import Button from '../components/Button'
import Form from '../components/Form'
import { useEffect, useState } from 'react'
import ClientRepository from '../core/clientRepository'
import ClientCollecton from '../backend/db/clientCollection'

export default function Home() {

  const repo: ClientRepository = new ClientCollecton

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState< 'chart' | 'form' >('chart')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('chart')
    })
  }

  function selectedClient(client: Client) {
    setClient(client)
    setVisible('form')
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    setVisible('form')
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAll()
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
        {<Charts clients={clients} 
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
