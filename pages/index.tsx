import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import * as Realm from 'realm-web'

const Home: NextPage = () => {
  const [product, setProduct] = useState<any>([])

  useEffect(() => {
    async function getAllProducts() {
      const REALM_APP_ID = 'testing_realm-bswvs'
      const app = new Realm.App({ id: REALM_APP_ID })
      const credentials = Realm.Credentials.anonymous()
      try {
        const bnb = await app.logIn(credentials)
        const allBNB = await bnb.functions.getAllData()
        setProduct(allBNB)
      } catch (err) {
        console.log(err)
      }
    }

    getAllProducts()
  }, [])

  console.log(product)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>
    </div>
  )
}

export default Home
