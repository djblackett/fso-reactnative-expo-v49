import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";
import { useParams } from "react-router-native";

const useRepository = () => {
  const [repository, setRepository] = useState();
  const url = useParams();
  const { data, error, loading } = useQuery(REPOSITORY, {
    variables: { id: url },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data) {
      setRepository(data.repositories);
    }
  }, [data]);

  return { repository, loading };
};

export default useRepository;