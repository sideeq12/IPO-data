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
            <h3>{this.state.MonthlyData}</h3>
        )
    }
}

export default MonthlyDetails;