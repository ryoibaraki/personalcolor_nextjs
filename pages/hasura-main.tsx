import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_LIST } from '../queries/queries'
import { GetListQuery } from '../types/generated/graphql'
import { Layout } from '../components/Layout'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetListQuery>(GET_LIST)
  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.list.map((user) => {
        return (
          <p className="flex flex-row" key={user.id}>
            {user.name}
          </p>
        )
      })}
    </Layout>
  )
}

export default FetchMain
