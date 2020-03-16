import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Link href="/signin" >
          <a>signin</a>
        </Link>
        <Link href="/signup">
          <a>signup</a>
        </Link>
        <Link href="/profile">
          <a>profile</a>
        </Link>
        <Link href="/playground">
          <a>playground</a>
        </Link>
      </>
    )
  }
}
