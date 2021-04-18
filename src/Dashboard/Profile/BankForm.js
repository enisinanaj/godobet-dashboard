import React from 'react'
import { Col, Form } from 'react-bootstrap';

const BankForm = ({bank, onChange, user, saveBank}) => {

    return (
        <Col md={12} sm={12}>
            <Form>
                <Form.Group controlId="nomeBanca">
                    <Form.Label>Nome banca</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Revolut"
                        disabled={user.stripeAccountStatus === 'verified'}
                        value={bank.bankName}
                        onChange={(event) => {
                            onChange({ ...bank, bankName: event.target.value });
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="indirizzoBanca">
                    <Form.Label>Indirizzo della Banca</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Via, numero civico, CAP, Città, sigla Provincia"
                        value={bank.bankAddress}
                        disabled={user.stripeAccountStatus === 'verified'}
                        onChange={(event) => {
                            onChange({ ...bank, bankAddress: event.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="IBAN">
                    <Form.Label>IBAN</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="IBAN del conto"
                        value={bank.iban}
                        disabled={user.stripeAccountStatus === 'verified'}
                        onChange={(event) => {
                            onChange({ ...bank, iban: event.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="abiCab">
                    <Form.Label>ABI / CAB</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="011683"
                        value={bank.abiCab}
                        disabled={user.stripeAccountStatus === 'verified'}
                        onChange={(event) => {
                            onChange({ ...bank, abiCab: event.target.value });
                        }}
                    />
                </Form.Group>
                <Form.Group controlId="swift">
                    <Form.Label>SWIFT</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="GIBAATWWXXX"
                        value={bank.swift}
                        disabled={user.stripeAccountStatus === 'verified'}
                        onChange={(event) => {
                            onChange({ ...bank, swift: event.target.value });
                        }}
                    />
                </Form.Group>
            </Form>
        </Col>
    )
}

export default BankForm;