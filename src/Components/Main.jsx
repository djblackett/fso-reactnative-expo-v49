import {StyleSheet, View} from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import {Navigate, Route, Routes} from "react-router-native";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
    container: {
        // marginTop: 32,
        flexGrow: 1,
        flexShrink: 1,
        alignContent: "center",
        backgroundColor: theme.colors.mainBackground,
        fontFamily: theme.fonts
    },
});

console.log(theme.fonts)

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </View>
    );
};

export default Main;