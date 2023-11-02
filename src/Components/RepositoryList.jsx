import RepositoryListContainer from "./RepositoryListContainer";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";

const RepositoryList = () => {
  const [selectedSortCategory, setSelectedSortCategory] = useState("latest");
  const { repositories } = useRepositories({ selectedSortCategory });

  return <RepositoryListContainer repositories={repositories} selectedSortCategory={selectedSortCategory} setSelectedSortCategory={setSelectedSortCategory}/>;
};

export default RepositoryList;