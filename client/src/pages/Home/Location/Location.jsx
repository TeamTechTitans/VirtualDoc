import React from 'react';
import Map from '../../../components/Map/Map';
import ContactForm from '../../../components/Contact/ContactForm';

const Location = () => {
    return (
        <div className="relative flex flex-col">
            <div className="relative flex-grow">
                <Map></Map>
            </div>
            <div className="w-full text-right absolute  p-2 top-1/2 transform lg:-translate-x-1/4 md:-translate-y-1/2 right-2 md:right-8 lg:right-0">
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Location;