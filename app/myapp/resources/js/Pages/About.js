/** @jsx jsx */
import React from 'react'

import tw from 'twin.macro'
import { jsx } from "@emotion/core";

import Layout from '@/Shared/Layout'


export default function About(props) {
  return (
    <Layout>
      <h1 className="text-5xl">{props.welcome}</h1>

      <p className="font-sans">It works!</p>
    </Layout>
  )
}
