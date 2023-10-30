import { expect, jest, test } from "@jest/globals";
import RepositoryListContainer from "../../Components/RepositoryListContainer";
import { render, screen } from "@testing-library/react-native";
import { numberShortener } from "../../Components/RepositoryItem";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };


      render(<RepositoryListContainer repositories={repositories}/>);
      // Add your test code here
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      const firstTestRepo = repositories.edges[0].node;
      const secondTestRepo =  repositories.edges[1].node;

      // screen.debug();
      expect(firstRepositoryItem).toHaveTextContent(firstTestRepo.fullName);
      expect(firstRepositoryItem).toHaveTextContent(firstTestRepo.description);
      expect(firstRepositoryItem).toHaveTextContent(firstTestRepo.language);
      expect(firstRepositoryItem).toHaveTextContent(firstTestRepo.ratingAverage);
      expect(firstRepositoryItem).toHaveTextContent(numberShortener(firstTestRepo.forksCount));
      expect(firstRepositoryItem).toHaveTextContent(numberShortener(firstTestRepo.reviewCount));

      expect(secondRepositoryItem).toHaveTextContent(secondTestRepo.fullName);
      expect(secondRepositoryItem).toHaveTextContent(secondTestRepo.description);
      expect(secondRepositoryItem).toHaveTextContent(secondTestRepo.language);
      expect(secondRepositoryItem).toHaveTextContent(secondTestRepo.ratingAverage);
      expect(secondRepositoryItem).toHaveTextContent(numberShortener(secondTestRepo.forksCount));
      expect(secondRepositoryItem).toHaveTextContent(numberShortener(secondTestRepo.reviewCount));


    });
  });
});