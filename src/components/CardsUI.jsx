import React, { Component } from 'react'
import './card-style.css'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import AP from  './AP'

export default class CardsUII extends Component {
    constructor(props){
        super(props);

        this.state = {
            // key : this.props.unId
        }

    }

    
    render() {

            const {title, info,imge, sn, by, tag, unId} = this.props;
            console.log("Key is: "+unId);

            // const getStateOfIndia = (unId) => {
            //     switch(unId){
            //         case 0:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 1:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 2:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 3:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 4:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 5:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 6:
            //             console.log("Welcome to "+title);
            //             break;
            //         case 7:
            //             console.log("Welcome to "+title);
            //             break;
                        
            //     }
            // }

        return (
            <div className="card text-center shadow">
            <div className="overflow">
                <img src={imge} alt={title} className="card-img-top" title={by}/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {info}
                </p>

                <div key={unId}>
                    <Router>
                        <Link to={"/"+tag}>
                            <button className="btn btn-outline-success" >
                                Info of: {sn}
                            </button> 
                        </Link>
                        <Route path="/:tag/:id">
                           
                        </Route>     
                    </Router>
                </div>

            </div>
        </div>
        )
    }
}
