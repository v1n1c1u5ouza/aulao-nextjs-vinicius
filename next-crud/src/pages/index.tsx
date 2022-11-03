import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Charts from '../components/Chart'
import Client from '../core/Client'

export default function Home() {

  const Clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-purple-900
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Charts clients={Clients}></Charts>
      </Layout>
    </div>
  )
}
