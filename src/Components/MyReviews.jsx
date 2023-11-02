import { FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import Text from "./text";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const MyReviews = () => {

  const [reviews, setReviews] = useState();

  const { data, error, loading } = useQuery(ME, {
    variables: {
      includeReviews: true
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data) {
      setReviews(data.me.reviews.edges.map(edge => edge.node));
    }
  }, [data]);

  if (loading) {
    return <Text>loading...</Text>;
  }

  console.log(data);

  return (
    <View>
      {data && <FlatList
        data={reviews}
        renderItem={({ item }) => <Review review={item} myReview={true}/>}
        keyExtractor={({ id }) => id}
      />}
    </View>
  );

};

export default MyReviews;