import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {Container, Wrapper, Section, Main, Logo, Link} from './style';
import {navbar} from '../../utils/navbar';
import Button from '../Generic/Button';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
           <Section onClick={()=> navigate('/home')} logo>
             <Logo/><h3>Houzing</h3>
           </Section>
           <Section>
             {
              navbar.map(({title, path, id})=> {
                return <Link className={({isActive}) => isActive && 'active'} key={id} to={path}>{title}</Link>
              })
             }
           </Section>
           <Section>
             <Button type='dark'>Sign In</Button>
           </Section>
        </Wrapper>
      </Main>
      <Outlet/>
    </Container>
  )
}

export default Navbar