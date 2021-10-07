/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTranslation = /* GraphQL */ `
  mutation CreateTranslation(
    $input: CreateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    createTranslation(input: $input, condition: $condition) {
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
export const updateTranslation = /* GraphQL */ `
  mutation UpdateTranslation(
    $input: UpdateTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    updateTranslation(input: $input, condition: $condition) {
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
export const deleteTranslation = /* GraphQL */ `
  mutation DeleteTranslation(
    $input: DeleteTranslationInput!
    $condition: ModelTranslationConditionInput
  ) {
    deleteTranslation(input: $input, condition: $condition) {
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
