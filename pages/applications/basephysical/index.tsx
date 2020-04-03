import React from 'react'
import { appInfo } from './config'
import * as physical from './physical'
import { Container, Button } from 'react-pitaya'
import { Layout } from '../../components/layout'

export default function render(_: AppProps) {
  const [world] = React.useState(new physical.World())

  React.useEffect(() => {
    world.run();
    (window as any).wrold = world

    return () =>{
      console.log('stop')
      world.stop()
    }
  }, [world])

  const addRigidBody = () => {
    world.addBody(new physical.RigidBody(1, 1))
  }

  return (
    <Layout info={appInfo}>
      <Container>
        <Button onClick={() => world.stop()}>
          停止世界
        </Button>
        <Button onClick={() => world.run()}>
          运行世界
        </Button>
        <Button onClick={addRigidBody}>
          添加刚体
        </Button>
      </Container>
    </Layout >
  )
}
