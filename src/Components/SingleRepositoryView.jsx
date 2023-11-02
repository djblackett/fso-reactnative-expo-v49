import SingleRepositoryItem from "./SingleRepositoryItem";
import Review from "./Review";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";
import { FlatList, Text } from "react-native";
import { useEffect, useState } from "react";

const SingleRepositoryView = () => {
  const [reviews, setReviews] = useState();
  const url = useParams();
  console.log(url);
  const { data, error, loading } = useQuery(REPOSITORY, {
    variables: {
      id: decodeURI(url.id)
    },
    fetchPolicy: "cache-and-network"
  });

  useEffect(() => {

    if (data) {
      setReviews(data.repository.reviews.edges.map(edge => edge.node));
    }
  }, [data]);

  console.log(data);

  if (loading) {
    return <Text>loading...</Text>;
  }
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <Review review={item} /> }
      keyExtractor={({ id }) => id}
      ListHeaderComponent={<SingleRepositoryItem data={data}/>}
    />
  );
};

export default SingleRepositoryView;