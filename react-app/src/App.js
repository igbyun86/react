import {useEffect, useState} from "react";

const SelectBox = (props) => {
    /*
    const handleChange = (e) => {
        // event handler
        console.log(e.target.value);
    };
*/
    useEffect(() => {
        setDefaultValue(props.defaultValue)
    }, [props.defaultValue])

    const [defaultValue, setDefaultValue] = useState(props.defaultValue)
    console.log("props.defaultValue", props.defaultValue);
    console.log("useState.defaultValue", defaultValue);

    return (
        <select onChange={props.handleChange} value={props.defaultValue}>
            {props.options.map((option, idx) => (
                <option
                    key={idx}
                    value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

function App() {
    const driverOptions = [
        {name:"본인", value:"01"},
        {name:"배우자", value:"02"},
        {name:"본인외1인", value:"03"},
        {name:"가족", value:"04"},
        {name:"전체", value:"05"}
    ];

    const handleChange = (e) => {
        setDriverInfo((prevState) => ({
            ...prevState,
            'driverType' : e.target.value
        }))
        //console.log(e.target.value);
    };

    const [driverInfo, setDriverInfo] = useState(DriverInfo)
    useEffect(() => {
        //console.log(driverInfo)
    }, [driverInfo]);

    return (
        <div>
            <SelectBox options={driverOptions} defaultValue={driverInfo.driverType} handleChange={handleChange} /><br/>
            <input type="text" name="person1" /><br/>
            <input type="text" name="person2" /><br/>
            <input type="radio" name="sex" value="1" id="rdo1" defaultChecked={driverInfo.sex === '1'} /> <label htmlFor="rdo1">남자</label>
            <input type="radio" name="sex" value="2" id="rdo2" defaultChecked={driverInfo.sex === '2'} /> <label htmlFor="rdo2">여자</label><br/>
            <button onClick={() => setDriverInfo((prevState) => ({
                ...prevState,
                'driverType' : '01'
            }))}>본인으로 설정</button>
        </div>
    );
}

const DriverInfo =  {
    driverType: '03',
    person1: '',
    person2: '',
    sex: '1'
}


export default App;
