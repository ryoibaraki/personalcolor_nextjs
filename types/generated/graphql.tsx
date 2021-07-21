import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "list" */
export type List = {
  __typename?: 'list';
  color: Scalars['String'];
  created_at: Scalars['timestamptz'];
  gender: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  season: Scalars['String'];
};

/** aggregated selection of "list" */
export type List_Aggregate = {
  __typename?: 'list_aggregate';
  aggregate?: Maybe<List_Aggregate_Fields>;
  nodes: Array<List>;
};

/** aggregate fields of "list" */
export type List_Aggregate_Fields = {
  __typename?: 'list_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<List_Max_Fields>;
  min?: Maybe<List_Min_Fields>;
};


/** aggregate fields of "list" */
export type List_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<List_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "list". All fields are combined with a logical 'AND'. */
export type List_Bool_Exp = {
  _and?: Maybe<Array<List_Bool_Exp>>;
  _not?: Maybe<List_Bool_Exp>;
  _or?: Maybe<Array<List_Bool_Exp>>;
  color?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  season?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "list" */
export enum List_Constraint {
  /** unique or primary key constraint */
  ListPkey = 'list_pkey'
}

/** input type for inserting data into table "list" */
export type List_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type List_Max_Fields = {
  __typename?: 'list_max_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type List_Min_Fields = {
  __typename?: 'list_min_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "list" */
export type List_Mutation_Response = {
  __typename?: 'list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<List>;
};

/** on conflict condition type for table "list" */
export type List_On_Conflict = {
  constraint: List_Constraint;
  update_columns?: Array<List_Update_Column>;
  where?: Maybe<List_Bool_Exp>;
};

/** Ordering options when selecting data from "list". */
export type List_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  season?: Maybe<Order_By>;
};

/** primary key columns input for table: list */
export type List_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "list" */
export enum List_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Season = 'season'
}

/** input type for updating data in table "list" */
export type List_Set_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['String']>;
};

/** update columns of table "list" */
export enum List_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Season = 'season'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "list" */
  delete_list?: Maybe<List_Mutation_Response>;
  /** delete single row from the table: "list" */
  delete_list_by_pk?: Maybe<List>;
  /** insert data into the table: "list" */
  insert_list?: Maybe<List_Mutation_Response>;
  /** insert a single row into the table: "list" */
  insert_list_one?: Maybe<List>;
  /** update data of the table: "list" */
  update_list?: Maybe<List_Mutation_Response>;
  /** update single row of the table: "list" */
  update_list_by_pk?: Maybe<List>;
};


/** mutation root */
export type Mutation_RootDelete_ListArgs = {
  where: List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_List_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ListArgs = {
  objects: Array<List_Insert_Input>;
  on_conflict?: Maybe<List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_List_OneArgs = {
  object: List_Insert_Input;
  on_conflict?: Maybe<List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ListArgs = {
  _set?: Maybe<List_Set_Input>;
  where: List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_List_By_PkArgs = {
  _set?: Maybe<List_Set_Input>;
  pk_columns: List_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "list" */
  list: Array<List>;
  /** fetch aggregated fields from the table: "list" */
  list_aggregate: List_Aggregate;
  /** fetch data from the table: "list" using primary key columns */
  list_by_pk?: Maybe<List>;
};


export type Query_RootListArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


export type Query_RootList_AggregateArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


export type Query_RootList_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "list" */
  list: Array<List>;
  /** fetch aggregated fields from the table: "list" */
  list_aggregate: List_Aggregate;
  /** fetch data from the table: "list" using primary key columns */
  list_by_pk?: Maybe<List>;
};


export type Subscription_RootListArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


export type Subscription_RootList_AggregateArgs = {
  distinct_on?: Maybe<Array<List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<List_Order_By>>;
  where?: Maybe<List_Bool_Exp>;
};


export type Subscription_RootList_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQuery = (
  { __typename?: 'query_root' }
  & { list: Array<(
    { __typename?: 'list' }
    & Pick<List, 'color' | 'created_at' | 'gender' | 'id' | 'name' | 'season'>
  )> }
);

export type GetListIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListIdsQuery = (
  { __typename?: 'query_root' }
  & { list: Array<(
    { __typename?: 'list' }
    & Pick<List, 'id'>
  )> }
);

export type GetListByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetListByIdQuery = (
  { __typename?: 'query_root' }
  & { list_by_pk?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'id' | 'name' | 'season' | 'created_at' | 'color' | 'gender'>
  )> }
);


export const GetListDocument = gql`
    query GetList {
  list(order_by: {created_at: desc}) {
    color
    created_at
    gender
    id
    name
    season
  }
}
    `;

/**
 * __useGetListQuery__
 *
 * To run a query within a React component, call `useGetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListQuery(baseOptions?: Apollo.QueryHookOptions<GetListQuery, GetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
      }
export function useGetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
        }
export type GetListQueryHookResult = ReturnType<typeof useGetListQuery>;
export type GetListLazyQueryHookResult = ReturnType<typeof useGetListLazyQuery>;
export type GetListQueryResult = Apollo.QueryResult<GetListQuery, GetListQueryVariables>;
export const GetListIdsDocument = gql`
    query GetListIds {
  list(order_by: {created_at: desc}) {
    id
  }
}
    `;

/**
 * __useGetListIdsQuery__
 *
 * To run a query within a React component, call `useGetListIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListIdsQuery(baseOptions?: Apollo.QueryHookOptions<GetListIdsQuery, GetListIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListIdsQuery, GetListIdsQueryVariables>(GetListIdsDocument, options);
      }
export function useGetListIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListIdsQuery, GetListIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListIdsQuery, GetListIdsQueryVariables>(GetListIdsDocument, options);
        }
export type GetListIdsQueryHookResult = ReturnType<typeof useGetListIdsQuery>;
export type GetListIdsLazyQueryHookResult = ReturnType<typeof useGetListIdsLazyQuery>;
export type GetListIdsQueryResult = Apollo.QueryResult<GetListIdsQuery, GetListIdsQueryVariables>;
export const GetListByIdDocument = gql`
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
    `;

/**
 * __useGetListByIdQuery__
 *
 * To run a query within a React component, call `useGetListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetListByIdQuery(baseOptions: Apollo.QueryHookOptions<GetListByIdQuery, GetListByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListByIdQuery, GetListByIdQueryVariables>(GetListByIdDocument, options);
      }
export function useGetListByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListByIdQuery, GetListByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListByIdQuery, GetListByIdQueryVariables>(GetListByIdDocument, options);
        }
export type GetListByIdQueryHookResult = ReturnType<typeof useGetListByIdQuery>;
export type GetListByIdLazyQueryHookResult = ReturnType<typeof useGetListByIdLazyQuery>;
export type GetListByIdQueryResult = Apollo.QueryResult<GetListByIdQuery, GetListByIdQueryVariables>;