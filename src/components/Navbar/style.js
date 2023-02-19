import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icon/logo.svg'; 

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`;

const Main = styled.div`
display: flex;
justify-content: center;
background: var(--primaryColor);
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #fff;
height: 64px;
padding: var(--padding);
width: 100%;
max-width: var(--width);
`;

const Section = styled.section`
display: flex;
align-items: center;
cursor: ${({logo}) => logo && 'pointer'};

.active {
    color: grey;
}
`;

const Logo = styled(logo)`
width: 30px;
height: 36px;
margin-right: 11px;
`;

const Link = styled(NavLink)`
text-decoration: none;
color: #ffff;
padding: 0 32px;
`;

export{Container, Wrapper, Section, Main, Logo, Link};