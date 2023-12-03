import {useState} from "react";

function UseState() {
    const [count, setCount] = useState(0);

    //useState에 object를 사용하는 경우
    const [fullName, setFullName] = useState({lastName: '', firstName: ''});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFullName((prevState) => ({
            ...prevState,
            [name] : value
        }));
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <p>fullName: {fullName.firstName} {fullName.lastName}</p>
            <input
                value={fullName.firstName}
                type="text"
                onChange={handleChange}
                name="firstName"
            />
            <input
                value={fullName.lastName}
                type="text"
                onChange={handleChange}
                name="lastName"
            />
        </div>
    );
}

export default UseState;