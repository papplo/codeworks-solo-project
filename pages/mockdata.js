import Layout from '../components/MyLayout.js';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch' /* So fetch works in the server and the browser */

const listStyle = {
  //margin: 15,
}

const MockDigest = (props) => {
  return (
      <Layout title="Welkome to tellUs">
        <h3>These are the posts</h3>
        <ul>
          <style jsx>{`
            a {
              text-transform: capitalize;
            }
            ul {padding: 0; margin: 0}
            li {
              list-style: none;
              padding: 15px 15px; margin: 0;
              background-color: #ccc;
            }
          `}</style>

          {props.posts
            .filter((i, index) => (index < 25))
            .map((el) => (
            <li style={listStyle} key={el.id}>
              <a>{el.title}</a>
              <span>By: User {el.userId}</span>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }

MockDigest.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()

  console.log(`Mock data fetched. Count: ${data.length}`)

  return {
    posts: data,
  }
}

export default MockDigest
