import * as React from "react";
import {Component} from "react";

class MonthlyDetails extends Component{
    constructor(){
        super();
        this.state = {
            MonthlyData : "MonthlyData"
        }
    }
    componentDidMount(){
        let url = "https://api.stlouisfed.org/fred/series?series_id=SMU16142609092161101&api_key=c8c81bfff01e8985bbbb8e22555c04a9&file_type=json#"
        fetch(url)
        .then(response => response.json())
        
      
    }
    render(){
        return(
            <div className="col-md-4">
            <h3>{this.state.MonthlyData}</h3>
            </div>
        )
    }
}

export default MonthlyDetails;