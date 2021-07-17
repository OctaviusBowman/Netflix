import React from 'react';
import { Accordion, OptInForm } from '../components'
import faqsData from '../fixtures/faq.json'

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(data =>
                <Accordion.Item key={data.id}>
                    <Accordion.Header>{data.header}</Accordion.Header>
                    <Accordion.Body>{data.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item></Accordion.Item>

            <OptInForm>
                <OptInForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptInForm.Text>
                <OptInForm.Input placeholder="Email Address" />
                <OptInForm.Button>Get Started</OptInForm.Button>
            </OptInForm>
        </Accordion>
    )
}

