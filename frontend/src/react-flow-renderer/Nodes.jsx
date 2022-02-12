import React from "react";
import { Handle } from "react-flow-renderer";

const RectangleNode = ({ data }) => {
  return (
    <div style={{ background: "#9ca8b3", padding: "1rem" }}>
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom`}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
};

const ParaNode = ({ data }) => {
  return (
    <div style={{
      background: "#9ca8b3", padding: "1rem",
      transform: "skew(155deg)"
    }}>
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom`}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
};


const StartNode = ({ data }) => {
  return (
    <div
      style={{
        background: "#9ca8b3", padding: "1rem", borderRadius: '50%'
      }}
    >
      <div id={data.id}>{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        id={`${data.id}.bottom`}
        style={{ borderRadius: 0 }}
      />
    </div>
  );
};

const EndNode = ({ data }) => {
  return (
    <div
      style={{
        background: "#9ca8b3", padding: "1rem", borderRadius: '50%'
      }}
    >
      <Handle
        type="target"
        position="top"
        id={`${data.id}.top`}
        style={{ borderRadius: "0" }}
      />
      <div id={data.id}>{data.label}</div>
    </div>
  );
};

export const nodeTypes = {
  rectangle: RectangleNode,
  startNode: StartNode,
  endNode: EndNode,
  paraNode: ParaNode
};