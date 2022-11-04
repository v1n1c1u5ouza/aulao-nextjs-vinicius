import Client from "../core/Client";
import { deleteIcon, editIcon } from "./icons"

interface ChartsProps {
    clients: Client[]
    selectedClient? : (client: Client) => void
    deleteClient?: (client: Client) => void
}

export default function Charts(props: ChartsProps) {

    const showActions = props.selectedClient || props.selectedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="txt-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }

    function renderData() { 
        return props.clients?.map((client, i)=>{
            return (
                <tr key={client.id}
                className={`${i % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {renderActions(client)}
               </tr>
            )
        }) 
    }

    function renderActions(client: Client) {
        return(
            <td className="flex justify-center">
                {props.selectedClient ? (
                <button className={`
                    flex justify-center items-center
                    rounded-full p-2 m-1
                    hover:bg-purple-400
                `}>
                    {editIcon}
                    </button>
                ) : false}
                {props.deleteClient ? (
                <button className={`
                    flex justify-center items-center
                    rounded-full p-2 m-1
                    hover:bg-purple-400
                `}>
                    {deleteIcon}
                </button>
                ): false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-700 to-purple-900
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}