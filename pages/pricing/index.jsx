import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'

const Pricing = () => {
  return (
    <MainLayout>
      <h2>Pricing Page</h2>
        <h1 className="title">
          to <Link href={"/"}>Index</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/contact.js</code>
        </p>
    </MainLayout>
  )
}

export default Pricing