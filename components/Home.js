import Link from 'next/link'
import { Layout } from './Layout'

export const Home = (props) => {
  return (
    <Layout>
      <header>
        <nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/our-trainers"><a>Our Trainers</a></Link></li>
            <li><Link href="/our-equipment"><a>Our Equipment</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="hero">
          <img src="images/hero-image.jpg" alt="Hero Image"/>
        </section>
        <section class="content">
          <div class="block">
            <h2>Block 1 Title</h2>
            {props.children}
          </div>
          <div class="block">
            <h2>Block 2 Title</h2>
            <p>Maecenas quis consectetur sapien. Aliquam posuere odio at lorem molestie, sed pharetra diam luctus. Donec fringilla ligula ac bibendum eleifend. Sed congue est vel neque vehicula, eget interdum eros facilisis. In sed volutpat libero.</p>
          </div>
          <div class="block">
            <h2>Block 3 Title</h2>
            <p>Donec lacinia velit vitae ipsum euismod, ut rhoncus ipsum bibendum. Mauris eleifend, nibh ut laoreet placerat, enim lectus bibendum est, sed maximus nisi velit vel velit. Nullam ut consectetur tortor.</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}

