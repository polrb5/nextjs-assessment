/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTranslation = /* GraphQL */ `
  query GetTranslation($id: ID!) {
    getTranslation(id: $id) {
      id
      tag
      valueLang {
        es
        en
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTranslations = /* GraphQL */ `
  query ListTranslations(
    $filter: ModelTranslationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTranslations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tag
        valueLang {
          es
          en
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
