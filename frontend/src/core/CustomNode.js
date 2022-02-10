import React, { useEffect, useState } from 'react';
import { Handle, Position, ReactFlowProvider } from 'react-flow-renderer';
import ReactFlow, { addEdge } from 'react-flow-renderer';
import { useZoomPanHelper } from 'react-flow-renderer';
const CustomNode = (props) => {
    const [elements, setElements] = useState(props.nodes)
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


    const { fitView } = useZoomPanHelper();


    const nodeTypes = {
        special: CustomNodeComponent,
    };

    const onLoad = (instance) => setTimeout(() => instance.fitView(), 0)
    const onConnect = (params) => setElements((els) => addEdge(params, els))
    return (
        <ReactFlowProvider>
            <div style={{ height: '100px' }}>
                {/* {props.index} */}
                {<ReactFlow onLoad={onLoad} onConnect={onConnect} elements={elements} nodeTypes={nodeTypes} />}
                {/* {JSON.stringify(elements)} */}
                <button
                    onClick={() => fitView({ padding: 0.2, includeHiddenNodes: true })}
                >Submit</button>

            </div>
        </ReactFlowProvider>
    );
};

export default CustomNode;