import { FaMotorcycle, FaCar, FaHome } from 'react-icons/fa'
import { Container } from '../../layouts/app'
import { MenuItem, SideBarContainer, SideBarTitle } from '../../layouts/sidebar'

export default function SideBar() {
  return (
    <Container>
      <SideBarContainer>
        <SideBarTitle>CRUD Frota</SideBarTitle>
        <MenuItem>
          <FaHome />
          Home
        </MenuItem>
        <MenuItem>
          <FaMotorcycle />
          Moto
        </MenuItem>
        <MenuItem>
          <FaCar />
          Carro
        </MenuItem>
      </SideBarContainer>
    </Container>
  )
}
