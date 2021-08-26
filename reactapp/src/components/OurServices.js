import React, { Component } from 'react'
import ServiceBox from './ServiceBox';

export class OurServices extends Component {
    render() {
        return (
            <div className="container my-28 mulish mx-auto">
                <h1 className="text-4xl">Our Services</h1>
                <div className="w-20 h-0.5 rounded-sm my-6 bg-black mx-auto"></div>
                <p className="text-owngray">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                <div className="grid md:grid-cols-3 mt-12 gap-6">
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/search.png'} name="Search doctor" content="Choose your doctor from thousands of specialist, general, and trusted hospitals"></ServiceBox>
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/pharm.png'} name="Online pharmacy" content="Buy  your medicines with our mobile application with a simple delivery system"></ServiceBox>
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/phone.png'} name="Consultation" content="Free consultation with our trusted doctors and get the best recomendations"></ServiceBox>
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/documents.png'} name="Details info" content="Free consultation with our trusted doctors and get the best recomendations"></ServiceBox>
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/medicine.png'} name="Emergency care" content="You can get 24/7 urgent care for yourself or your children and your
lovely family"></ServiceBox>
                    <ServiceBox img_path={process.env.PUBLIC_URL+'/images/medinfo.png'} name="Tracking" content="Track and save your medical history and health data "></ServiceBox>
                </div>
                <button className="border-blue-500 mt-16 text-blue-500 border-2 py-2 px-8 rounded-full">Learn More</button>
            </div>
        )
    }
}

export default OurServices
