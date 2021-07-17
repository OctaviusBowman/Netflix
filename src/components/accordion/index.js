import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Item, Inner, Header, Body } from './styles/accordion.js'

const ToggleContext = createContext();

export default function Accordion({ children, ...restOfProps }) {
    return (
        <Container {...restOfProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restOfProps }) {
    return (
        <Title {...restOfProps}>{children}</Title>
    )
}

Accordion.Item = function AccordionItem({ children, ...restOfProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restOfProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restOfProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restOfProps}>
            {children}
            {toggleShow ? <img src='images/icons/close-slim.png' alt='Close' /> : <img src='images/icons/add.png' alt='Open' />}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restOfProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return (toggleShow ? <Body {...restOfProps}>{children}</Body> : null)
}