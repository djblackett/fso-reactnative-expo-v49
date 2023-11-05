import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query repositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection,
        $searchKeyword: String,
        $after: String,
        $first: Int
    ) {
            repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first ) {
                totalCount
                edges {
                    node {
                        id
                        description
                        forksCount
                        fullName
                        language
                        ratingAverage
                        ownerAvatarUrl
                        reviewCount
                        stargazersCount
                        createdAt
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
`;

export const REPOSITORY = gql`
    query repository(
        $id: ID!,
        $after: String,
        $first: Int
    ) {
        repository(id: $id ) {
            id
            fullName
            url
            description
            forksCount
            language
            ratingAverage
            ownerAvatarUrl
            reviewCount
            stargazersCount,
            reviews(after: $after, first: $first) {
                totalCount
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    }
`;

export const AUTHENTICATE = gql`
    mutation authenticate(
        $username: String!,
        $password: String!
    ){
        authenticate(
            credentials: { 
                username: $username, 
                password: $password }
        ) {
            accessToken
        }
    }
`;

export const ME = gql`
  query me($includeReviews: Boolean = false) {
      me {
          username
          reviews @include(if: $includeReviews) {
              edges {
                  node {
                      id
                      rating
                      text
                      createdAt
                      user {
                          username
                      }
                      repository {
                          id
                          fullName
                      }
                  }
              }
          }
      }
    }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
      createReview(review: $review) {
          repositoryId
      }
  }
`;

export const CREATE_USER = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            id
            username
        }
    }`;

export const DELETE_REVIEW = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }`;
