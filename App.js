import Main from './src/Components/Main';
import {NativeRouter} from "react-router-native";
import {StatusBar} from "expo-status-bar";

const App = () => {

    return (
        <>
        <NativeRouter>
            <Main/>
        </NativeRouter>
        <StatusBar />
        </>
    )
};

export default App;