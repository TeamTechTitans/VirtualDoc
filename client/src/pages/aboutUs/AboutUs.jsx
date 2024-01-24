import React from 'react';
import SiteHeader from '../../components/siteHeader/SiteHeader';
import TeamMember from './components/TeamMember';
import ClinicalServices from '../Home/components/clinicalServices/ClinicalServices';
import ClinicServices from './components/ClinicServices';
const AboutUs = () => {
    return (<>
        <div>
            <SiteHeader children="About Us" title="Home- Aboutus"></SiteHeader>
        </div>
        <TeamMember/>
        <ClinicalServices/>
        <ClinicServices/>
        
        </>);
};

export default AboutUs;