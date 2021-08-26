import React, { Component } from 'react'

export class HealthcareProviders extends Component {
    render() {
        return (
            <div className="container mx-auto grid md:grid-cols-2 my-16 gap-4 mulish flex items-center justify-between">
                <div className='mr-0 flex flex-col items-start'>
                    <img className="w-96" src={process.env.PUBLIC_URL+"images/healthcare.png"}></img>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-5xl text-center md:text-left">Leading healthcare <br></br>providers</h1>
                    <div className="w-20 h-0.5 rounded-sm mt-6 bg-black"></div>
                    <p className="md:text-left text-center my-8 text-owngray">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver</p>
                    <button className="bg-white border-blue-500 border-2 text-blue-500 py-2 px-6 rounded-full">Learn More</button>
                </div>
                
            </div>
        )
    }
}

export default HealthcareProviders
