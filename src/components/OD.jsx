import React from 'react'
import './card-style.css'
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import AP from  './AP'

// import { Link } from 'react-router-dom';


const OD = (props) => {
    const {title, info,imge, sn, by, tag, key} = props;

    // const [active, setActive] = useState({tag});
// console.log(imge);
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

                <div key={key}>
                            <button className="btn btn-outline-success">
                                Info of: {sn}
                            </button> 
                </div>

            </div>
        </div>
    )
}

export default OD
