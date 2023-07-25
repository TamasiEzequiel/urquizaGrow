import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from '../PedirDatos'
import { ListadoProd } from "./ListadoProd"



export const Productos = () => {

    let [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(false)

    const { catId } = useParams()


    useEffect(() => {

        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (catId) {
                    setProductos(resp.filter((el) => el.categoria === catId))
                } else {
                    setProductos(resp)
                }

            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (

        <>
            {

                <ListadoProd productos={productos} />


 
            }

        </>
    )
}