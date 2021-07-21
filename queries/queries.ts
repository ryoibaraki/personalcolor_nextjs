import { gql } from '@apollo/client'

export const GET_LIST = gql`
  query GetList {
    list(order_by: { created_at: desc }) {
      color
      created_at
      gender
      id
      name
      season
    }
  }
`

export const GET_LIST_LOCAL = gql`
  query GetList {
    list(order_by: { created_at: desc }) @client {
      color
      created_at
      gender
      id
      name
      season
    }
  }
`

export const GET_LISTIDS = gql`
  query GetListIds {
    list(order_by: { created_at: desc }) {
      id
    }
  }
`
export const GET_LISTBY_ID = gql`
  query GetListById($id: uuid!) {
    list_by_pk(id: $id) {
      id
      name
      season
      created_at
      color
      gender
    }
  }
`
