import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query repositories(
        $orderBy: AllRepositoriesOrderBy,
        $orderDirection: OrderDirection,
        $searchKeyword: String
    ) {
            repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword ) {
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
                      rating
                      text
                      createdAt
                      user {
                          username
                      }
                      repository {
                          fullName
                      }
                  }
              }
          }
      }
    }
`;

export const REPOSITORY = gql`
  query repository($id: ID!) {
      repository(id: $id) {
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
          reviews {
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
// other queries...