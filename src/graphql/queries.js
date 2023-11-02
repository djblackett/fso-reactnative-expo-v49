import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
            repositories {
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
  query me {
      me {
          username
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