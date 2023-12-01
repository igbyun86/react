import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h3>hook test page</h3>
            <ul>
                <Link to="/useState"><li>useState</li></Link>
                <Link to="/useEffect"><li>useEffect</li></Link>
                <Link to="/useRef"><li>useRef</li></Link>
                <Link to="/useMemo"><li>useMemo</li></Link>
                <Link to="/useContext"><li>useContext</li></Link>
            </ul>
        </div>
    );
}

export default Main;