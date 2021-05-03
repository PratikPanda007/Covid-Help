import React, { Component } from 'react'
import Card from './CardsUI'
import Navbar from './Navbar';
import InfoCard from './InfoCard';

// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import {statesOfIndia} from '../statesOfIndia';
// import AP from  './AP'


export default class Cards extends Component {
    render() {
        return (
            <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {statesOfIndia.map((data, key) => {
                        return(
                            <>
                                <div key={key} className="col-md-4">
                                    <Card title={data.name} info="Learn More. Click below" imge={data.img} sn={data.shortName} tag={data.tag} unId={key} />
                                </div>   
                            </>
                        );
                    })
                    }
                </div>
            </div>
            </>
        )
    }
}
