import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>

    <Link href="/onboarding">
      <a style={linkStyle}>Onboarding</a>
    </Link>

    <Link href="/mockdata">
      <a style={linkStyle}>Mockdata</a>
    </Link>

  </div>
)

export default Header
