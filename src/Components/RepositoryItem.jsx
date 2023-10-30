import { Image, View, StyleSheet } from "react-native";
import React from "react";
import Text from "./Text";
import { Text as NativeText } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.itemBackground
  },
  topContainer: {
    flexDirection: "row",

  },
  info: {
    marginLeft: 12,
    justifyContent: "space-between",
    flex: 1,
    flexWrap: "wrap"

  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16
  },
  stats: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center"
  },
  numbers: {
    fontWeight: theme.fontWeights.bold
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 4,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold
  },
  description: {
    color: theme.colors.descriptionText,
    marginTop: 4,
    marginBottom: 8,

  },
  languageBackground: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 4,
    paddingTop: 2,
    backgroundColor: theme.colors.primary,
    width: "auto",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"

  },
  languageText: {
    color: "white",
    fontSize: theme.fontSizes.body,
    padding: 0,
    margin: 0
  }
});

export const numberShortener = (num) => {
  if (num < 1000) {
    return String(num);
  }
  return (num / 1000).toFixed(1) + "k";
};


export const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.topContainer}>
        <Image source={{ uri: item.ownerAvatarUrl }}  alt={"user avatar"} style={styles.image}/>
        <View style={styles.info}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{ item.description }</Text>
          <View style={styles.languageBackground}>
            <NativeText style={styles.languageText}>{ item.language }</NativeText>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>

        <View style={styles.stats}><Text style={styles.description}>Stars</Text><Text style={styles.numbers}>{ numberShortener(item.stargazersCount) }</Text></View>
        <View style={styles.stats}><Text style={styles.description}>Forks</Text><Text style={styles.numbers}>{ numberShortener(item.forksCount) }</Text></View>
        <View style={styles.stats}><Text style={styles.description}>Reviews</Text><Text style={styles.numbers}>{ numberShortener(item.reviewCount) }</Text></View>
        <View style={styles.stats}><Text style={styles.description}>Rating</Text><Text style={styles.numbers}>{ numberShortener(item.ratingAverage) }</Text></View>
      </View>
    </View>
  );
};