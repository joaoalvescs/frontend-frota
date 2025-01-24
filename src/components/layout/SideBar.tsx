import { FaMotorcycle, FaCar } from 'react-icons/fa'
import { Container } from '../../layouts/app'
import { MenuItem, SideBarContainer, SideBarTitle } from '../../layouts/sidebar'

export default function SideBar() {
  return (
    <Container>
      <SideBarContainer>
        <SideBarTitle>CRUD Frota</SideBarTitle>
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
