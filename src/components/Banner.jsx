import "../assets/css/Banner.css"
import {Carousel} from "react-bootstrap";
import BannerImage01 from "../assets/images/banner_01.png";
import BannerImage02 from "../assets/images/banner_02.png";
import BannerImage03 from "../assets/images/banner_03.png";

function Banner() {

    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img src={BannerImage01} className="BannerImage01"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={BannerImage02} className="BannerImage02"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={BannerImage03} className="BannerImage03"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;