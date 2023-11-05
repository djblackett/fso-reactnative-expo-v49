import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import RepoListHeader from "./RepoListHeader";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator}/>;

const RepositoryListContainer = ({ repositories, selectedSortCategory, setSelectedSortCategory, searchQuery, setSearchQuery, onEndReach }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  // console.log("repos loaded:",repositoryNodes.length);

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate("/" + encodeURI(item.id));
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Pressable onPress={() => handleNavigate(item)}><RepositoryItem item={item}/></Pressable>}
      keyExtractor={item => item.id}
      ListHeaderComponent={<RepoListHeader
        selectedSortCategory={selectedSortCategory}
        setSelectedSortCategory={setSelectedSortCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;