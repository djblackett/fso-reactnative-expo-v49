import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import { useNavigate } from "react-router-native";
import RepoPicker from "./RepoPicker";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator}/>;

const RepositoryListContainer = ({ repositories, selectedSortCategory, setSelectedSortCategory }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const navigate = useNavigate();
  const handleNavigate = (item) => {
    // navigate("/" + (item.fullName).replaceAll("/", "-"));
    navigate("/" + encodeURI(item.id));
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Pressable onPress={() => handleNavigate(item)}><RepositoryItem item={item}/></Pressable>}
      keyExtractor={item => item.id}
      ListHeaderComponent={<RepoPicker selectedSortCategory={selectedSortCategory} setSelectedSortCategory={setSelectedSortCategory}/>}
    />
  );
};

export default RepositoryListContainer;