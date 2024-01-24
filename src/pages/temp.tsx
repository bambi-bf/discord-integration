"use client"

import type {NextPage} from 'next'
import Image from 'next/image'
import {signIn, signOut, useSession} from 'next-auth/react'

const Home: NextPage = () => {
  const {data: session} = useSession()

  if (session) {
    console.log('session',session)
    return (
      <>
        You&apos;re signed in! Congratulations! <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Image
            src={session.user?.image ?? ""}
            alt=""
            width={38}
            height={38}
            style={{borderRadius: '50%'}}
          />
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('discord')}>Sign in</button>
    </>
  )
}

export default Home