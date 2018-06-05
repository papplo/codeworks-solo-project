import Link from 'next/link'


const Card = (props) => {
  return (
    <li className={`style-${props.userId} id-${props.id}`}>
    <style jsx>{`
      li {
        min-width: 80%;
        height: 100px;
        list-style: none;
        padding: 10px;
        margin: 0 5px;
        background-color: #ccc;
        font-size: .8em;
      }
    `}</style>
      <a>{props.title}</a>
      <span>By: User {props.userId}</span>
    </li>
  )

}

export default Card
