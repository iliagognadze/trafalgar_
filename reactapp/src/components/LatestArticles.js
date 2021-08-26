import React, { Component } from 'react';
import ArticleBox from './ArticleBox';


export class LatestArticles extends Component {

    render() {
        return (
            <div className="container my-28 mulish mx-auto">
                <h1 className="text-4xl">Check out our latest article</h1>
                <div className="w-20 h-0.5 rounded-sm my-6 bg-black mx-auto"></div>
                <div className="grid md:grid-cols-3 mt-12 gap-6">
                    <ArticleBox img_path="images/post1.png" title="Disease detection, check up in the laboratory" content="In this case, the role of the health laboratory is very important to do a disease detection..."></ArticleBox>
                    <ArticleBox img_path="images/post2.png" title="Herbal medicines that are safe for consumption" content="Herbal medicine is very widely used at this time because of its very good for your health..."></ArticleBox>
                    <ArticleBox img_path="images/post3.png" title="Natural care for healthy facial skin" content="A healthy lifestyle should start from now and also for your skin health. There are some..."></ArticleBox>
                </div>
                <button className="border-blue-500 mt-16 text-blue-500 border-2 py-2 px-8 rounded-full">View All</button>
            </div>
        )
    }
}

export default LatestArticles
