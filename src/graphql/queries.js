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
// other queries...