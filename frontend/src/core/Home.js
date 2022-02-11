import Layout from "./Layout"
import { isAuthenticated } from '../auth'
import { getCategories,getFlows} from "../user/apiHelper";
import { useEffect,useState } from "react";
const Home = () => {
    const [categories, setCategories] = useState(false)
    const [flowcharts, setFlowcharts] = useState(false)
    const [currentFlowChart, setCurrentFlowChart] = useState([])
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
        // console.log(currentFlowChart)
    }

    useEffect(() => {
        init();
    }, []);
    return (
        <Layout title="Welcome to Flowtion" description="..">
            {isAuthenticated() && isAuthenticated().user.role === 0 &&
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
            {JSON.stringify(currentFlowChart)}
        </Layout>

    )
}
export default Home;