import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import theme from "../theme";

const RepoPicker = ({ selectedSortCategory, setSelectedSortCategory }) => {


  const styles = StyleSheet.create({
    container: {
      borderRadius: 0,
      border: "none",
      paddingTop: 16,
      paddingBottom: 16,
      width: "90%",
      backgroundColor: theme.colors.mainBackground,
      alignSelf: "center"
    },
    item: {
      width: "90%"
    }
  });

  return (
    <Picker
      style={styles.container}
      selectedValue={selectedSortCategory}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedSortCategory(itemValue)
      }>
      
      <Picker.Item style={styles.item} label="Latest repositories" value="latest"/>
      <Picker.Item style={styles.item} label="Highest rated repositories" value="highest"/>
      <Picker.Item style={styles.item} label="Lowest rated repositories" value="lowest"/>

    </Picker>
  );
};

export default RepoPicker;