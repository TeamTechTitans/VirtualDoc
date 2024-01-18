import React from 'react';
import Map from '../../../components/Map/Map';
import ContactForm from '../../../components/Contact/ContactForm';

const Location = () => {
    return (
        <div className="relative flex flex-col h-screen">
            <div className="relative flex-grow">
                <Map></Map>
            </div>
            <div className="absolute top-16 p-2 md:top-1/2 transform lg:-translate-x-1/4 md:-translate-y-1/2 right-2 md:right-8 lg:right-0">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Location;