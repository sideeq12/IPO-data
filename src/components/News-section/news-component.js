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

        async function PostData(url = "", data = {}){
            const response = await fetch(url, {
                // method : "GET",
                mode : "no-cors",
                // headers : {
                //     "Content-Type" : "application/json"
                // },
                body : JSON.stringify(data)
            })
            return response.json();
        }
        PostData(url, {check : 3})
        .then(data => console.log(data))
        // fetch(url, {mode : "no cors"})
        // .then(response => response.json())
        // .then(data => console.log(data))
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