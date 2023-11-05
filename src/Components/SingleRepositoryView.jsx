import SingleRepositoryItem from "./SingleRepositoryItem";
import Review from "./Review";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";
import { FlatList, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
  reviewList: {
    paddingBottom: 32
  }
});

const SingleRepositoryView = () => {

  const { id } = useParams();
  const variables = {
    id,
    first: 4,
    after: ""
  };

  const { repository, fetchMore, loading } = useRepository({ variables });

  const reviewNodes = repository ?
    repository.reviews.edges.map(edge => edge.node)
    : [];

  // console.log("Reviews loaded:", reviewNodes.length);

  if (loading) {
    return <Text>loading...</Text>;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      style={styles.reviewList}
      data={reviewNodes}
      renderItem={({ item }) => <Review review={item} /> }
      keyExtractor={({ id }) => id}
      ListHeaderComponent={<SingleRepositoryItem repository={repository}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepositoryView;