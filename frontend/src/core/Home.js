import React from 'react';
import ReactFlowRenderer from '../react-flow-renderer';
import Layout from './Layout'
const Home = () => {
    return (
        <Layout 
            title="Add a flowchart"
            description=""
            className="container col-md-8 offset-md-2"
        >
            <ReactFlowRenderer />
        </Layout>
    );
};

export default Home;