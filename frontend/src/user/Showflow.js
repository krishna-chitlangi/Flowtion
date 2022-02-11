import { useState, useEffect } from "react"
import { getFlows, getFlow } from "./apiHelper";

const Showflow = () => {
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
                        {fc._id}

                    </button>
                    <br></br>
                    <br></br>

                </div>)
            })}
            {currentFlowChart && JSON.stringify(currentFlowChart)}
        </div>
    )
}
export default Showflow