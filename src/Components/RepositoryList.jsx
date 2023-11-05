import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";
import { useEffect, useState } from "react";
import * as React from "react";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [selectedSortCategory, setSelectedSortCategory] = useState("latest");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchValue] = useDebounce(searchQuery, 500);

  const [variables, setVariables] = useState({
    searchValue,
    first: 5,
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    after: ""
  });

  const { repositories, fetchMore } = useRepositories({ variables });

  useEffect(() => {
    if (selectedSortCategory === "latest") {
      setVariables({
        ...variables,
        orderBy: "CREATED_AT",
        orderDirection: "DESC"
      });
    }

    if (selectedSortCategory === "highest") {
      setVariables({
        ...variables,
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC"
      });
    }

    if (selectedSortCategory === "lowest") {
      setVariables({
        ...variables,
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC"
      });
    }
  }, [selectedSortCategory]);

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    selectedSortCategory={selectedSortCategory}
    setSelectedSortCategory={setSelectedSortCategory}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;