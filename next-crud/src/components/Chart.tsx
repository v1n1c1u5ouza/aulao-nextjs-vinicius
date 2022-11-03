import Client from "../core/Client";

interface ChartsProps {
    clients: Client[]
}

export default function Charts(props: ChartsProps) {

    function renderHeader() {
        return (
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderData() { 
        return props.clients?.map((client, i)=>{
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
               </tr>
            )
        }) 
    }

    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}