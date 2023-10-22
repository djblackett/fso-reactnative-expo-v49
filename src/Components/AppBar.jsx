import {View, StyleSheet, ScrollView} from 'react-native';
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12,
        paddingTop: 32,
        color: theme.colors.appBar,
        backgroundColor: theme.colors.appBarBackground
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <Link style={styles.link} to="/">
                <AppBarTab title={"Repositories"} />
            </Link>
            {/*<AppBarTab title={"About"}/>*/}
            <Link to="/signin">
                <AppBarTab title={"Sign in"} />
            </Link>
        </ScrollView>
    </View>;
};



export default AppBar;