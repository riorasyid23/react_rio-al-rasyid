import { gql } from "@apollo/client";

export const GetUser = gql`
  query GetUser {
    graphqlapollo_todolist {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

export const GetUserByID = gql`
  query GetUser($id: Int!) {
    graphqlapollo_todolist(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;
