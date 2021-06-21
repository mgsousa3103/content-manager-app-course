import React from "react";

const ResourceLabel = ({ status }) => {
  return (
    <>
      {status === "active" && (
        <span class={"tag is-large ml-4 is-light is-info"}>{status}</span>
      )}

      {status === "inactive" && (
        <span class={"tag is-large ml-4 is-light is-warning"}>{status}</span>
      )}

      {status === "complete" && (
        <span class={"tag is-large ml-4 is-light is-success"}>{status}</span>
      )}
    </>
  );
};

export default ResourceLabel;
