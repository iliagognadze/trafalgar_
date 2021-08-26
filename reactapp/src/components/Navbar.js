import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="container mulish mx-auto items-center flex justify-between py-8">
                <a className="text-2xl text-navLinkPrimary flex items-center" href="#"><img className="w-8 mr-2" src={process.env.PUBLIC_URL+"images/logo.png"}></img>Trafalgar</a>
                <div className="flex hidden md:block items-center">
                    <a href="javascript:0" className="text-linkPrimary">Home</a>
                    <a href="javascript:0" className="ml-6 text-owngray hover:text-gray-600">Find a doctor</a>
                    <a href="javascript:0" className="ml-6 text-owngray hover:text-gray-600">Apps</a>
                    <a href="javascript:0" className="ml-6 text-owngray hover:text-gray-600">Testimonials</a>
                    <a href="javascript:0" className="ml-6 text-owngray hover:text-gray-600">About us</a>
                </div>
            </div>
        )
    }
}

export default Navbar
