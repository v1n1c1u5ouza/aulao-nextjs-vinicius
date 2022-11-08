import { useEffect, useState } from "react";
import ClientCollecton from "../backend/db/clientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/clientRepository";
import useChartOurForm from "./useChartOurForm";

export default function useClient() {
  const repo: ClientRepository = new ClientCollecton();

  const { chartVisible, formVisible, showChart, showForm } = useChartOurForm()

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showChart()
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    chartVisible,
    showChart,
    saveClient,
    selectedClient,
    deleteClient,
    newClient,
    getAll
  }
}
