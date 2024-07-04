import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

function FarmExperts() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.apiBaseUrl}/farm-experts/get-all/`)
      .then((response) => {
        console.log(response);
        setExperts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6 lg:p-12 ">Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-6 lg:p-12 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-primary">
          Farm Experts
        </h1>
      </header>
      <section className="max-w-4xl mx-auto space-y-6">
        {experts.length > 0 ? (
          experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white p-6 border border-primary rounded-lg shadow-md shadow-secondary flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                {expert.image_url ? (
                  <img
                    className="h-12 w-12 rounded-full"
                    src={expert.image_url}
                    alt={expert.first_name}
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {`${expert.first_name[0]}${expert.last_name[0]}`}
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-xl font-medium">
                  {expert.first_name} {expert.last_name}
                </h2>
                <p className="">{expert.title}</p>
                <p className="">{expert.bio}</p>
                <a
                  href={`tel:${expert.phone_number}`}
                  className="hover:underline"
                >
                  Call: {expert.phone_number}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div>No experts found.</div>
        )}
      </section>
    </div>
  );
}

export default FarmExperts;
