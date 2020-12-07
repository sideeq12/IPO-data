import * as React from "react";
import {Component} from "react";

class MonthlyDetails extends Component{
    constructor(){
        super();
        this.state = {
            MonthlyData : "MonthlyData"
        }
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