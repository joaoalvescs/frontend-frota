import Content from './components/layout/Content'
import SideBar from './components/layout/SideBar'
import { Container } from './layouts/app'

const Login: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content />
    </Container>
  )
}

export default Login
