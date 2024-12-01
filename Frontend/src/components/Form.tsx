import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100vh;
    padding: 20px;
  }
`;
const RegisterText = styled.h5`
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
  font-size: 0.7em;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;
const FormContainer = styled.div`
  width: 400px; /* Fixed width for desktops */
  height: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;

  @media (max-width: 1024px) {
    width: 80%; /* Use percentage width for tablets */
  }

  @media (max-width: 768px) {
    width: 90%; /* Use percentage width for mobile */
    padding: 20px 15px;
  }
`;

const Text = styled.h5`
  margin-bottom: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.85em;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 6px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.85em;
    padding: 8px;
  }
`;

interface FormLogin {
  email: string;
  password: string;
}

interface FormRegister extends FormLogin {
  address: string;
  phone: string;
}

const Form = ({ isRegister }: { isRegister: boolean }) => {
  const [formData, setFormData] = useState<FormLogin | FormRegister>({
    email: "",
    password: "",
    ...(isRegister ? { address: "", phone: "" } : {}),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      const registerData = formData as FormRegister;
      console.log("Processed Phone:", parseInt(registerData.phone || "0", 10));
    }
    // Code Core login implementation
    console.log(`Form value:`, formData);
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Text>{isRegister ? "Register Form" : "Login Form"}</Text>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {isRegister && (
            <>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={(formData as FormRegister).address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="number"
                  id="phone"
                  name="phone"
                  value={(formData as FormRegister).phone}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <Button type="submit">Submit</Button>
          <div>
            {isRegister ? (
              <RegisterText>
                Already have an account? <a href="/">Login</a>
              </RegisterText>
            ) : (
              <RegisterText>
                Don't have an account?{" "}
                <a
                  href="/register"
                  style={{ color: isRegister ? "green" : "red" }}
                >
                  Register
                </a>
              </RegisterText>
            )}
          </div>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Form;
