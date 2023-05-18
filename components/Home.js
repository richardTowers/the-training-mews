import Link from 'next/link'
import { Layout } from './Layout'

export const Home = (props) => {
  return (
    <Layout>
      
      <main>
        <section class="hero">
          <h1>The Training Mews</h1>
        </section>
        <section class="content">
          <div class="block">
            <h2>About us</h2>
            {props.children}
          </div>
        </section>
      </main>
    </Layout>
  )
}

