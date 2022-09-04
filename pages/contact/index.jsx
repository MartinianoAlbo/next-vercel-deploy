import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
        <h2>Contact Page</h2>
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
