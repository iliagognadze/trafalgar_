import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="bg-gradient-to-b from-blue-400 to-blue-600">
                <div className="container mx-auto py-16 grid gap-4 md:grid-cols-5">
                    <div className="col-span-2 flex flex-col items-start">
                        <a className="text-2xl text-white flex items-center" href="#"><img className="w-8 mr-2" src={process.env.PUBLIC_URL+"images/logo_white.png"}></img>Trafalgar</a>
                        <p className="text-white text-left my-8">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone</p>
                        <p className="text-white text-left text-sm">©Trafalgar PTY LTD 2020. All rights reserved</p>
                    </div>
                    <div className="flex flex-col text-white text-left justify-between">
                        <h1 className="text-xl">Company</h1>
                        <a href="javascript:0">About</a>
                        <a href="javascript:0">Testimonials</a>
                        <a href="javascript:0">Find a doctor</a>
                        <a href="javascript:0">Apps</a>
                    </div>
                    <div className="flex flex-col text-white text-left justify-between">
                        <h1 className="text-xl">Region</h1>
                        <a href="javascript:0">Indonesia</a>
                        <a href="javascript:0">Singapore</a>
                        <a href="javascript:0">Hongkong</a>
                        <a href="javascript:0">Canada</a>
                    </div>
                    <div className="flex flex-col text-white text-left justify-between">
                        <h1 className="text-xl">Help</h1>
                        <a href="javascript:0">Help center</a>
                        <a href="javascript:0">Contact support</a>
                        <a href="javascript:0">Instructions</a>
                        <a href="javascript:0">How it works</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
