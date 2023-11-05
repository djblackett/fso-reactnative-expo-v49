import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    mainBackground: "#e1e4e8",
    appBar: "#FFFFFF",
    appBarBackground: "#24292e",
    languageBackground: "#0367ce",
    descriptionText: "#828282",
    itemBackground: "#FFFFFF",
    error: "#d73a4a",
    buttonText: "white"
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    android: "Roboto",
    ios: "Arial",
    default: "System",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  margins: {
    appBarTabRight: 16
  },
  buttons: {
    height: 50,
    color: "white"
  }
};

export default theme;