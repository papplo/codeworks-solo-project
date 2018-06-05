import Layout from  '../components/MyLayout.js';
import Card from    '../components/Card.js';
import fetch from   'isomorphic-unfetch' /* So fetch works in the server and the browser */

const MockDigest = (props) => {
console.log(props.posts);
  return (
      <Layout title="Welkome to tellUs">
        <ul>
          <style jsx>{`
            a {
              text-transform: capitalize;
            }
            ul {
              padding: 0;
              margin: 0;

            }
            ul ul {
              width: 100%;
              display:flex;
              flex-direction: row;
              overflow-y: hidden;
              //overflow-y: scroll; /* Must be 'scroll' not 'auto' */
              -webkit-overflow-scrolling: touch;
              margin 0 0 10px 0;
            }

            h4 {
              margin: 15px 5px 5px;
              font-size: 1em;
            }
            h5 {
              margin: 15px 5px 5px;
              font-size: .7em;
            }


          `}</style>
          <h4>Whats going on in BCN</h4>

          <h5>Music</h5>
          <ul>
            {props.posts
              .filter((i, index) => (index < 13 && i.userId === 2))
              .map((el) => (
                  <Card key={el.id} title={el.title} userId={el.userId} id={el.id} />
            ))}
          </ul>

          <h5>Food</h5>
          <ul>
            {props.posts
              .filter((i, index) => (index < 3 && i.userId === 1))
              .map((el) => (
                <Card key={el.id} title={el.title} userId={el.userId} id={el.id} />
            ))}
          </ul>

          <h5>Events</h5>
          <ul>
            {props.posts
              .filter((i, index) => (index < 23 && i.userId === 3))
              .map((el) => (
                <Card key={el.id} title={el.title} userId={el.userId} id={el.id} />
            ))}
          </ul>

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
