import React, { useEffect, useState } from 'react';
import { Handle, Position, ReactFlowProvider } from 'react-flow-renderer';
import ReactFlow, { addEdge } from 'react-flow-renderer';
import './dnd.css'
const customNodeStyles = {
    background: '#9CA8B3',
    color: '#FFF',
    padding: 10,

};
const CustomNodeComponent = ({ data }) => {
    return (
        <div style={customNodeStyles}>

            <Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
            <div>{data.text}</div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: '30%', borderRadius: 0 }}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ top: '70%', borderRadius: 0 }}
            />
        </div>
    );
};
const CustomNode = (props) => {
    const [elements, setElements] = useState(props.nodes)
    const nodeTypes = {
        special: CustomNodeComponent,
    };
    const onLoad = (instance) => setTimeout(() => instance.fitView(), 0)
    const onConnect = (params) => setElements((els) => addEdge(params, els))
    return (
        <ReactFlowProvider style={{ height: '75vh', width: '75vw', border: '2px solid black' }}>
            <div >
                {/* {props.index} */}
                {<ReactFlow onLoad={onLoad} onConnect={onConnect} elements={elements} nodeTypes={nodeTypes} />}
                {JSON.stringify(elements)}

                <button type="submit">submit</button>

            </div>
        </ReactFlowProvider>
    );
};

export default CustomNode;