import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import * as React from "react";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [selectedSortCategory, setSelectedSortCategory] = useState("latest");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchValue] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories({ selectedSortCategory, searchValue });


  return <RepositoryListContainer
    repositories={repositories}
    selectedSortCategory={selectedSortCategory}
    setSelectedSortCategory={setSelectedSortCategory}
    searchQuery={searchQuery}
    setSearchQuery={setSearchQuery}

  />;
};

export default RepositoryList;