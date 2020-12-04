import React, {Component} from 'react';
import Heading from "./haader-section/header.component";
import Monthly from "./Monthlydetails/monthly-analysis"
import News from "./News-section/news-component"

function App(){
    return(
    <div>
    <Heading />
    <div className="container">
    <div className="row">
    <News />
    <Monthly />
    </div>
    </div>
    </div>)
}

export default App;
