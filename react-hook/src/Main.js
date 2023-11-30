import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h3>hook test page</h3>
            <ul>
                <Link to="/useState"><li>useState</li></Link>
                <Link to="/useEffect"><li>useEffect</li></Link>
            </ul>
        </div>
    );
}

export default Main;