import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../core/Layout"
import ReactFlow, {
    removeElements,
    updateEdge,
    addEdge,
    Background,
    MiniMap,
    Controls
} from "react-flow-renderer";
import { nodeTypes } from "../react-flow-renderer/Nodes";
import { getFlow } from './apiHelper'
const Displayflow = (props) => {
    const [elements, setElements] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [arr, setArr] = useState([])
    const [flag, setFlag] = useState(false)
    const [activeNode, setActiveNode] = useState();
    const [clicked, setClicked] = useState(false)
    const [newName, setNewName] = useState("");
    const [instance, setInstance] = useState();

    useEffect(() => {
        console.log(props.elements)
        showCurrentFlow(props.match.params.id)
        if (activeNode) setNewName(activeNode.data.label);
    }, [activeNode]);

    const connectHandler = (params) => {
        setElements((prev) => addEdge(params, prev));
    };
    const edgeUpdateHandler = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els));

    const onLoad = (reactFlowInstance) => {
        setInstance(reactFlowInstance);
        reactFlowInstance.fitView();
    };
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    var arr1 = []
    const showCurrentFlow = (id) => {
        getFlow(id)
            .then(data => {
                if (data.error) {

                } else {
                    console.log(data.nodes)
                    setAnswer(data.nodes)
                    let x = data.nodes;
                    let y = []
                    let q = []
                    for (let i of x) {
                        if (i.hasOwnProperty("position") ) {
                            y.push(i)
                        }
                        else if(i["flg"] === 1){
                            console.log(i)
                            q = elements
                            q.push(i)
                            
                        }
                        else {
                            let p = arr
                            p.push(i)
                            setArr(p)
                        }

                    }
                    y = shuffle(y)
                    let z = 0
                    for (let i of y) {
                        
                        i["position"]["x"] = 200
                        i["position"]["y"] = 100 * z
                        z++;
                    }
                    for(let i=0;i<q.length;i++){
                        y.push(q[i])
                    }
                    console.log(y)
                    setElements(y)

                }
            });
    }
    const saveChangesHandler = () => {
        setClicked(true)

        if (elements.length !== answer.length)
            console.log("wrong answer")
        else {

            // for (let ele of answer) {
            //     const index = elements.findIndex((element) => JSON.stringify(element) === JSON.stringify(ele);
            //     if (index === -1)
            //         console.log("wrong ")
            // }
            var x = elements
            for (let i of x) {
                if (i.hasOwnProperty("position") === false) {
                    arr1.push(i)
                }
            }

            arr.sort();
            arr1.sort();
            console.log(arr)
            console.log(arr1)
            let i = 0

            for (i = 0; i < arr.length; i++) {

                let src = arr[i]["source"]

                var index = arr1.findIndex((a) => (a["source"] === src))

                if (arr1[index]["target"] !== arr[i]["target"]) {
                    console.log("wrong answer")

                    break;
                }
            }
            if (i == arr.length) {
                console.log("correct")
                setFlag(true)
            }
        }

    };

    return (
        <Layout title="Find the flow">

            <div
                style={{
                    height: "75vh",
                    width: "75vw",
                    border: "1px solid black",
                    marginLeft: "12.5vw"
                }}
            >

                <ReactFlow
                    elements={elements}
                    onConnect={connectHandler}
                    deleteKeyCode={8 || 46}
                    onEdgeUpdate={edgeUpdateHandler}
                    nodeTypes={nodeTypes}
                    snapToGrid={true}
                    snapGrid={[16, 16]}
                    connectionLineStyle={{ stroke: "black", strokeWidth: 2 }}
                    onLoad={onLoad}
                >
                    <Background variant="dots" gap={15} size={2} color="#c8c8c8" />

                    <MiniMap
                        nodeColor={(node) => {
                            switch (node.type) {
                                case "rectangle":
                                    return "red";
                                case "startNode":
                                    return "#00ff00";
                                case "endNode":
                                    return "rgb(0,0,255)";
                                case "paraNode":
                                    return "rgb(120,120,120)"
                                default:
                                    return "#eee";
                            }
                        }}
                    />

                    <Controls />
                </ReactFlow>




                <button type="button" onClick={saveChangesHandler}>
                    Save changes
                </button>
                {
                    flag && <div>
                        correct answer
                    </div>
                }
                {

                    !flag && clicked && <div>
                        wrong answer
                    </div>
                }
            </div>
            </Layout>
    );
};

export default withRouter(Displayflow);