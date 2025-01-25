import { FaMotorcycle, FaCar, FaHome } from 'react-icons/fa'
import { Container } from '../../layouts/app'
import { MenuItem, SideBarContainer, StyledLink } from '../../layouts/sidebar'

export default function SideBar() {
  return (
    <Container>
      <SideBarContainer>
        <MenuItem>
          <StyledLink to="/">
            <FaHome />
            Home
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/moto">
            <FaMotorcycle />
            Moto
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/carro">
            <FaCar />
            Carro
          </StyledLink>
        </MenuItem>
      </SideBarContainer>
    </Container>
  )
}
