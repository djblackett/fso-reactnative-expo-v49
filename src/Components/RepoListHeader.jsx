import  Searchbar from "./SearchBar";
import RepoPicker from "./RepoPicker";

const RepoListHeader = ({ selectedSortCategory, setSelectedSortCategory, searchQuery, setSearchQuery }) => {
  return <>
    <Searchbar searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}/>
    <RepoPicker selectedSortCategory={selectedSortCategory} setSelectedSortCategory={setSelectedSortCategory}/>
  </>;
};

export default RepoListHeader;