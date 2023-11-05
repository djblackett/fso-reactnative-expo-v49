import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";

const useRepository = ({ variables }) => {

  const { data, loading, fetchMore, ...result } = useQuery(REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { ...variables },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

export default useRepository;