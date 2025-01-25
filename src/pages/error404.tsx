import { Container } from '../layouts/app'
import { ErrorPage } from '../layouts/error404'

import SideBar from '../components/layout/SideBar'

export default function Error404() {
  return (
    <Container>
      <SideBar />
      <ErrorPage>Página não encontrada!</ErrorPage>
    </Container>
  )
}
