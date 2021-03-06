import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";

function InfectionControlForm() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("data", data);
    setValidated(true);
  }

  return (
    <>
      <p>
        Fyll ut fult navn, epost, dato du besøkte oss og et telefon nummer vi
        kan nå deg på i tilfelle vi må smittespore deg!
      </p>
      <p>Takk for at du tok deg tid til å fylle ut skjemaet!</p>
      {validated && (
        <div className="validationForm">Smittesporing registrert!</div>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group>
            <Form.Label>Fullt Navn</Form.Label>
            <Form.Control
              name="fulltNavn"
              placeholder="Fyll inn fullt navn"
              ref={register}
            />
            {errors.fultNavn && (
              <ErrorMessage>{errors.fultNavn.message}</ErrorMessage>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              name="telefon"
              placeholder="Fyll inn telefon nummer"
              ref={register}
            />
            {errors.telefon && (
              <ErrorMessage>{errors.telefon.message}</ErrorMessage>
            )}
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group>
            <Form.Label>Epost</Form.Label>
            <Form.Control
              name="epost"
              placeholder="Fyll inn epost"
              ref={register}
            />
            {errors.epost && (
              <ErrorMessage>{errors.epost.message}</ErrorMessage>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Født</Form.Label>
            <Form.Control name="bursdag" type="date" ref={register} />
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default InfectionControlForm;
