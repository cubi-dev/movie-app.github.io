import React from "react";
import { Container, TextInput } from "react-materialize";
import "./Contact.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
export default function ContactFC() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="contact"
      style={{
        backgroundColor: theme.backgroundColor,
        borderBottom: theme.borderBottom,
      }}
    >
      <Container
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <TextInput
          label="First Name"
          style={{ color: theme.color }}
        ></TextInput>
        <TextInput label="Last Name" style={{ color: theme.color }}></TextInput>
        <TextInput
          label="Your Email"
          email
          validate
          error="Wrong Email Format!"
          success="Great"
          style={{ color: theme.color }}
        ></TextInput>
        <TextInput
          data-length={50}
          label="Input message"
          style={{ color: theme.color }}
        />
      </Container>
    </div>
  );
}
