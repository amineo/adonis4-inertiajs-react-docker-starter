import React from 'react'
import Layout from '@/Shared/Layout'

export default function About(props) {
  return (
    <Layout>
      <h1 className="text-5xl">{props.welcome}</h1>

      <p className="font-sans">Hey, it works!</p>
    </Layout>
  )
}
