import React from 'react'
import styles from './style.less'
import { apps } from '../config/apps'
import { Card } from './components/card'
import { Navbar } from './components/navbar'
export default class Index extends React.Component {
  render() {
    return (
      <div className={styles.index}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.applications}>
          {apps.map(
            app =>
              <Card key={app.name} {...app} />
          )}
        </div>
      </div>
    )
  }
}
