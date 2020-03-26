/** @jsx jsx */
import React from 'react'

import tw from 'twin.macro'
import { jsx } from "@emotion/core";

import Layout from '@/Shared/Layout'


const Alert = tw.div`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-4`
const SuccessMsg = (page) => <Alert role="alert">
                              <p className="font-bold">Success! ({page})</p>
                              <p>Something happened!</p>
                            </Alert>


export default function Index(props) {
  return (
    <Layout>
      <h1 className="text-5xl test">{props.welcome}</h1>
      {SuccessMsg(props.welcome)}
    </Layout>
  )
}
