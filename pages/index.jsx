import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h2>Home age</h2>
        <h1 className="title">
          to <Link href={"/about"}>About</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>
    </MainLayout>

  )
}
