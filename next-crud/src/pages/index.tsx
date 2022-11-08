import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Charts from "../components/Chart";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import ClientRepository from "../core/clientRepository";
import ClientCollecton from "../backend/db/clientCollection";
import useClient from "../hooks/useClient";

export default function Home() {
  const { selectedClient, saveClient, deleteClient, newClient, showChart, chartVisible, clients, client  } = useClient();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-purple-900
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {chartVisible ? (
          <>
            <div className="flex justify-end">
              <Button cor="purple" className={`mb-4`} onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            {
              <Charts
                clients={clients}
                selectedClient={selectedClient}
                deleteClient={deleteClient}
              ></Charts>
            }
          </>
        ) : (
          <Form
            client={client}
            clientChange={saveClient}
            canceled={showChart}
          />
        )}
      </Layout>
    </div>
  );
}
