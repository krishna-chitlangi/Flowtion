//user side flowchart playground to find correct flowchart
import React, { useState, useEffect } from "react";
import Menu from "../core/Menu";
import { getFlow } from './apiHelper'
const ShowLeader = (props) => {
    const [data,setData] = useState(false)
    useEffect(() => {
        showCurrentFlow(props.match.params.id)
    }, []);

    const showCurrentFlow = (id) => {
        getFlow(id)
            .then(data => {
                if (data.error) {

                } else {
                    setData(data)
                }
            });
    }
    
    return (
        <div>
            <Menu></Menu>
            Leaderboard
            <br></br>
            {JSON.stringify(data.leaderboard) }
        </div>
    );
};

export default ShowLeader;