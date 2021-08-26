import React, { Component } from 'react'

export class DownloadApps extends Component {
    render() {
        return (
            <div className="container mx-auto grid md:grid-cols-2 my-32 gap-4 mulish flex items-center justify-between">
                
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-5xl text-center md:text-left">Download our<br></br>mobile apps</h1>
                    <div className="w-20 h-0.5 rounded-sm mt-6 bg-black"></div>
                    <p className="text-center md:text-left my-8 text-owngray">Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely</p>
                    <button className="bg-white border-blue-500 border-2 text-blue-500 py-2 px-6 rounded-full">Download</button>
                </div>
                <div className='mr-0 flex flex-col items-center md:items-end'>
                    <img className="w-96" src={process.env.PUBLIC_URL+"images/downloadart.png"}></img>
                </div>
            </div>
        )
    }
}

export default DownloadApps
