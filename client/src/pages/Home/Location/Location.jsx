import React from 'react';
import Map from '../../../components/Map/Map';
import ContactForm from '../../../components/Contact/ContactForm';

const Location = () => {
    return (
        <div className="relative flex flex-col h-screen">
            <div className="relative flex-grow">
                <Map></Map>
            </div>
            <div className="absolute top-1/2 transform -translate-x-1/4 -translate-y-1/2 right-0 ">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Location;