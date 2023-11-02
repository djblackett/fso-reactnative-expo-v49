import * as React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const SearchBar = ({ searchQuery, setSearchQuery }) => {


  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      width: "90%",
      alignSelf: "center",
      marginTop: 8,
      borderRadius: 2
    }
  });

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.container}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
