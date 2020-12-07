import * as React from "react";
import {Component} from "react";

class News extends Component{
    constructor(){
        super();
        this.state ={
            News : "News Hub"
        }
    }
    componentDidMount(){
        let url = "https://api.stlouisfed.org/fred/series?series_id=SMU16142609092161101&api_key=c8c81bfff01e8985bbbb8e22555c04a9&file_type=json#"
        fetch(url)
        .then(response => response.json())
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