import { Link } from "react-router-dom"


export const Item = ({ id,price, stock, name, img }) => { //DESCRIPCION ITEM
    return (

        <div className="cardList">|
             <img src={img}/>
            <h3 id="cardTitle">{name}</h3>
            <p>{"$" + price}</p>
            <p>{"Stock: " + stock}</p>
            <Link to={`/detail/${id}`}>
            <button className="btn-vermas"> Ver mas </button>
            </Link>
            
  
        </div>


    )
}