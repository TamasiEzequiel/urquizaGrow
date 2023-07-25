import Button from 'react-bootstrap/Button';


export const ItemCount = ({ max, min = 0, counter, setCounter}) => { // +  Y - PRODUCTOS

    

    const handleSumar = (e) => {
        counter < max && setCounter(counter + 1)
       
    }
    const handleRestar = (e) => {
        counter > min && setCounter(counter - 1)
        
    }
    return (

        <div className="btnCtrlCant">
            <Button variant="success" onClick={handleSumar} > + </Button>            
            <span> {counter}  </span>
            <Button variant="danger" onClick={handleRestar} > - </Button>
        </div>
    )
}



//<button className="btnSumar" onClick={handleSumar}> + </button>