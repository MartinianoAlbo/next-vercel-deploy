import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: '#0070f3',
  TextDecoration: 'underline'
}

export const ActiveLink = (props) => {

  const { path, name } = props;

  const { asPath } = useRouter()

  return (
    <Link href={ path }>
      <a style={ asPath === path? style : null } >{ name }</a>
    </Link>
  )
}
