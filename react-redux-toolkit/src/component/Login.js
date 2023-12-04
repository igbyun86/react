import {useDispatch} from "react-redux";
import {login, logout} from "../app/userSlice";

function Login() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(login({name: "ig", age: 30, email: "test@test.com"}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    );
}

export default Login;