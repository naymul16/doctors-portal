import React from 'react';
import Infocard from '../infoCard/Infocard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
   {
    title : 'Opening Hours',
    description : 'We Are Open 7 Days',
    icon : faClock,
    background : 'primary'
   },
   {
    title : 'Visit Our Location',
    description : 'Brooklyn , NY 10101 USA',
    icon : faMapMarker,
    background : 'dark'
   },
   {
    title : 'Call Us Now',
    description : '+123456562',
    icon : faPhone,
    background : 'primary'
   },

]

const Businessinfo = () => {
    return (
        <section className="d-flex justify-content-center">
           <div className="row w-75">
                {
                    infosData.map(info => <Infocard info={info}></Infocard>)
                }
           </div>
        </section>
    );
};

export default Businessinfo;