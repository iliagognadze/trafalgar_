import React, { Component } from 'react'

export class ConsultToday extends Component {
    render() {
        return (
            <div className="container mx-auto grid md:grid-cols-2 mt-4 gap-4 mulish flex items-center justify-between">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-5xl text-center md:text-left">Virtual healthcare<br></br>for you</h1>
                    <p className="text-center md:text-left my-8 text-owngray">Trafalgar provides progressive, and affordable<br></br> 
                    healthcare, accessible on mobile and online 
                    for everyone</p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full">Consult Today</button>
                </div>
                <div className='mr-0 flex flex-col items-center md:items-end'>
                    <img className="w-96" src={process.env.PUBLIC_URL+"images/consult.png"}></img>
                </div>
            </div>
        )
    }
}

export default ConsultToday
