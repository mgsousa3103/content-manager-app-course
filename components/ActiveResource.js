import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const axiosResponse = await axios.get("/api/activeResource");
      const resource = axiosResponse.data;
      /** Destructuring resource */
      const { timeToFinish, activationTime } = resource;
      /** Destructuring resource */
      const timeToFinishFront = parseInt(timeToFinish, 10);
      const elapsedTime = moment().diff(moment(activationTime), "seconds");
      const updatedTimeToFinish = timeToFinishFront * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }

    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const hasResource = resource && resource.id;

  const completeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "complete" })
      .then((_) => location.reload())
      .catch((_) => alert("Cannot complete the resource"));
  };

  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "No Resource Active"}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <h2 className="elapsed-time">0</h2>
          ))}
      </div>

      {hasResource ? (
        <>
          <Link href={`/resources/${resource.id}`}>
            <a className="button is-info is-light mr-2">Go to Resource</a>
          </Link>
          {seconds === 0 && (
            <button
              onClick={completeResource}
              className="button is-primary is-light ml-2"
            >
              Click and Done!
            </button>
          )}
        </>
      ) : (
        <Link href="/">
          <a className="button is-info is-light">Go to Resources</a>
        </Link>
      )}
    </div>
  );
};

export default ActiveResource;
