import * as React from "react";
import {Component} from "react";

class News extends Component{
    constructor(){
        super();
        this.state ={
            News : "News Hub"
        }
    }
    render(){
        let news = this.state.News;
        return(
            <div className="col-md-6 news-hub">
                <h3>{news}</h3>
            </div>
        )
    }
}
export default News;