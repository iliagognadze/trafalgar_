import React, { Component } from 'react'

export class ArticleBox extends Component {
    render() {
        return (  
            <div className="servicesShadow">
                <div className="w-full rounded-t-2xl h-60 bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+'/'+this.props.img_path}` }}></div>
                <div className="p-6 flex flex-col items-start">
                    <h1 className="text-2xl text-left">{this.props.title}</h1>
                    <p className="text-left text-owngray mt-4">{this.props.content}</p>
                    <button className="text-blue-500 text-left mt-6">Read More</button>
                </div>
            </div>
        )
    }
}

export default ArticleBox
