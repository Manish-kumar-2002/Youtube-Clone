import Button from "./Button"
import React from "react";
import Slider from "react-slick";

const ButtonList = ({name}) => {
    // let settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 10,
    //     slidesToScroll: 1,
    //   };

  const categories = [
    "Data Structures", "Mixes", "Skills", "Reverberation", "Live",
    "Chill-out music", "Indian pop music", "DJ mix", "Gadgets",
    "Vocal Music", "Information", "Comedy"
  ];


    return (
        <div className="flex py-2 gap-2 fixed top-[81.5px] overflow-x-auto z-5 bg-[#0f0f0f] w-full">
            {/* <Slider {...settings}> */}
            {
                categories.map((item,index)=><Button key={index} name={item} />)
            }
       
      {/* </Slider> */}
        </div>
    )
}

export default ButtonList