import { Container } from '../layouts/app'

import SideBar from '../components/layout/SideBar'
import Content from '../components/layout/Content'

export default function Moto() {
  return (
    <>
      <Container>
        <SideBar />
        <Content />
      </Container>
    </>
  )
}
