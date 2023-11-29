import { NavDropdown } from 'react-bootstrap';
import personIcon from '../../../imgs/svgs/person-circle.svg';

function NavbarProfile(props: { username: string }) {
  const { username } = props;
  return (
    <>
      <img className='me-2' src={personIcon} width={30} alt="icone usuario" />
      <NavDropdown title={username}>
        <NavDropdown.Item href="#profile">perfil</NavDropdown.Item>
        <NavDropdown.Item href="#logout">sair</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

export default NavbarProfile;
