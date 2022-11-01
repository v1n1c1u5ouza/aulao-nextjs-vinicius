import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ClientForCode() {
    const router = useRouter()

    return(
        <Layout titulo="Navegação dinâmica">
            <div>Códico = {router.query.code}</div>
            <div>filial = {router.query.filial}</div>
        </Layout>
    )
}