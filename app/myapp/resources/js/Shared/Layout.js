import React, { useEffect } from 'react'


import TopNav from '../Components/TopNav';

export default function Layout({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <main>
      <header>
        <TopNav />
      </header>
      <article className="max-w-xl center mx-auto px-4">
        {children}
      </article>
    </main>
  )
}
