import { useState, useEffect } from "react"
import { getFlows, getFlow } from "./apiHelper";
import { withRouter } from "react-router-dom";
const Showflow = (props) => {
    const [flowcharts, setFlowcharts] = useState(false)
    const [currentFlowChart, setCurrentFlowChart] = useState(false)
    const init = () => {
        getFlows().then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                setFlowcharts(data)
            }
        })
    };
    useEffect(() => {
        init();

    }, []);
    const handleClick = (e) => {

        getFlow(e.target.value).then(data => {
            if (data.error) {
                console.log("error occured")
            } else {
                setCurrentFlowChart(data)
                console.log(currentFlowChart)
                props.history.push(`/display/${data._id}`)
            }
            //  console.log(e.target.value)
            //console.log("clicked ")
        })
    }



    return (
        <div>
            Showing flowcharts
            <br></br>
            <br></br>
            {/* {JSON.stringify(flowcharts)} */}
            {flowcharts && flowcharts.map((fc, i) => {
                return (<div key={i}>

                    <button key={i} value={fc._id} onClick={(e) => handleClick(e)}>
                        {fc.name}

                    </button>
                    <br></br>
                    <br></br>

                </div>)
            })}
            {currentFlowChart && JSON.stringify(currentFlowChart)}
        </div>
    )
}
export default withRouter(Showflow)