import {Pressable, StyleSheet, Text} from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.appBar,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        marginRight: theme.margins.appBarTabRight,
    }
})
const AppBarTab = ({title}) => {
    return (
        <Text style={styles.text}>
            {title}
        </Text>
    )
}

export default AppBarTab;