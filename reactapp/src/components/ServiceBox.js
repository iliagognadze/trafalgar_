import React, { Component } from 'react'

export class ServiceBox extends Component {

    

    render() {
        return (
            <div className="flex flex-col cursor-pointer justify-around p-6 bg-white servicesShadow items-start">
                <img className="w-20" src={this.props.img_path}></img>
                <div>
                    <h1 className="text-2xl text-left mt-4">{this.props.name}</h1>
                    <p className="text-left text-owngray mt-4">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
            </div>
        )
    }
}

export default ServiceBox
