import React from 'react';
import { Container, Input, Button, Text } from './styles/optInForm';

export default function OptInForm({ children, ...restOfProps }) {
    return (
        <Container {...restOfProps}>
            {children}
        </Container>
    )
}

OptInForm.Input = function OptInFormInput({ ...restOfProps }) {
    return (
        <Input {...restOfProps} />
    )
}

OptInForm.Button = function OptInFormButton({ children, ...restOfProps }) {
    return (
        <Button {...restOfProps}>{children}<img src="images/icons/chevron-right.png" alt="Try Now!" /></Button>
    )
}

OptInForm.Text = function OptInFormText({ children, ...restOfProps }) {
    return (
        <Text {...restOfProps}>{children}</Text>
    )
}