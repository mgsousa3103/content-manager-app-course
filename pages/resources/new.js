import React from "react";
import Layout from "components/Layout/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert(error?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2 my-6">
            <ResourceForm
              onFormSubmit={createResource}
              title="Add new resource"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
