import React, { useState } from 'react';

import { Redirect } from "react-router-dom";
import CustomNode from './CustomNode';
const Form = () => {
    const [myVal, setMyval] = useState(50)
    const [myOut, setMyOut] = useState(0)
    const [myIn, setMyIn] = useState(0)
    const [myId, setMyId] = useState(0)
    const [myText, setMyText] = useState('default')
    const [myNodes, setMyNodes] = useState([])
    const [showFc, setshowFc] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setMyval(myVal + 50)
        setMyId(myId + 1)
        let x = myNodes
        x.push({ id: myId, type: 'special', position: { x: myVal, y: 50 }, data: { text: myText } })
        setMyNodes(x)
        setMyText('')

    }
    const handleChange = (event) => {
        setMyText(event.target.value)
    }
    const handleChange1 = (event) => {
        setMyIn(event.target.value)
    }
    const handleChange2 = (event) => {
        setMyOut(event.target.value)
    }
    const Redirect = () => {
        console.log(myNodes)
        setshowFc(true)
    }
    // id: props.index,
    // type: 'special',
    // position: { x: props.node.myVal, y: props.node.myVal },
    // data: { text: props.node.myText },
    return (
        <div style={{ height: '40%' }}>
            {!showFc &&
                <div><form onSubmit={handleSubmit}>
                    <input type="text" val={myText} onChange={(e) => handleChange(e)} />
                    <br></br> <input type="Number" val={myText} onChange={(e) => handleChange1(e)} />
                    <br></br><input type="Number" val={myText} onChange={(e) => handleChange2(e)} />
                    <button >Add</button>


                </form>
                    <br>
                    </br>
                    <button onClick={Redirect}> Done</button>
                    <br>
                    </br>
                    {JSON.stringify(myNodes)}
                </div>}
            {
                showFc &&
                <div>
                    <CustomNode nodes={myNodes} in={myIn} out={myOut} />
                </div>

            }
        </div>
    );
};
export default Form;