import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ selectedSortCategory, searchValue }) => {
  const [repositories, setRepositories] = useState();

  console.log(searchValue);

  const getVariables = () => {
    if (selectedSortCategory === "latest") {
      return {
        orderBy: "CREATED_AT",
        orderDirection: "DESC"
      };
    }

    if (selectedSortCategory === "highest") {
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC"
      };
    }

    if (selectedSortCategory === "lowest") {
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC"
      };
    }


    return  {
      orderBy: "CREATED_AT",
    };
  };

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network", variables: { ...getVariables(), searchKeyword: searchValue }
  });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading };
};

export default useRepositories;