
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {

    return (

        <div className='slide-home'>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="\img\slide1.jpg"
                    alt="First slide"
                    style={{height: "700px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="\img\slide1.jpg"
                    alt="Second slide"
                    style={{height: "700px"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="\img\slide1.jpg"
                    alt="Third slide"
                    style={{height: "700px"}}
                />
            </Carousel.Item>
        </Carousel>
        </div>
    )
}