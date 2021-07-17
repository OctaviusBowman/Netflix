import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink } from './styles/header';

export default function Header({ background = true, children, ...restOfProps }) {
    return (
        background ? <Background {...restOfProps}>{children}</Background> : { children }
    )
}

Header.Frame = function HeaderFrame({ children, ...restOfProps }) {
    return (
        <Container {...restOfProps}>{children}</Container>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restOfProps }) {
    return (
        <ButtonLink {...restOfProps}>{children}</ButtonLink>
    )
}

Header.Logo = function HeaderLogo({ to, ...restOfProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restOfProps} />
        </ReactRouterLink>
    )
}