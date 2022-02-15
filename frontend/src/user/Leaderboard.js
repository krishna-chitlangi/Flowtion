import { isAuthenticated } from '../auth'
import { getCategories,getFlows} from "./apiHelper";
import { useEffect,useState } from "react";
import ReactFlowRenderer from '../react-flow-renderer';
import Showflow from './Showflow'
import Menu from "../core/Menu";
import { Redirect } from 'react-router-dom';
import ShowLeader from './ShowLeader';
import ShowFlow1 from './ShowFlow1';
const Leaderboard = () => {
    const [categories, setCategories] = useState(false)
    const [flowcharts, setFlowcharts] = useState(false)
    const [currentFlowChart, setCurrentFlowChart] = useState([])
    const [flag,setFlag] = useState(false)
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                
                let mySet1 = new Set()
                data.map((d, i) => {
                    // console.log(d.category)
                    mySet1.add(d.category)
                })
                const array = [...mySet1];
                setCategories(array)
            }
        })

        getFlows().then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                setFlowcharts(data)
            }
        })
    };
    const handleClick = (e) => {
        setCurrentFlowChart([])
        // console.log(e.target.value)
        let x = []
        flowcharts.map((fc, i) => {
            // console.log(fc.category === e.target.value)
            if(fc.category === e.target.value){
                x.push(fc)
            }
        })
        setCurrentFlowChart(x)
        setFlag(true)
        // console.log(currentFlowChart)
    }

    useEffect(() => {
        init();
    }, []);
    return (
        <div>
            <Menu></Menu>
            <div>
                {
                    
                    categories && categories.map((fc, i) => {
                        return (<div key={i}>
                            <button key={i} value={fc} onClick={(e) => handleClick(e)} >
                                {fc}
                            </button>
                            <br></br>
                            <br></br>
                        </div>)
                    })
                }
                {flag && 
                    <ShowFlow1 flow={currentFlowChart}></ShowFlow1>
                }
            </div>
        </div>
    )
}

export default Leaderboard;