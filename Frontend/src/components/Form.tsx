import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const FormContainer = styled.div`
  max-width: 400px;
  height: 60vh;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px 50px 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
`;
const RegisterText = styled.h5`
  margin-top: 20px;
  padding-top: 20px;
  text-align: center;
  font-size: 0.7em;
`;
const Text = styled.h5`
  margin-bottom: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 1.2em;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 0.9em;
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
`;

interface FormLogin {
  email: string;
  password: string;
}

interface FormRegister extends FormLogin {
  address: string;
  phone: number;
}

const Form = ({ isRegister }: { isRegister: boolean }) => {
  const [formData, setFormData] = useState<FormLogin | FormRegister>({
    email: "",
    password: "",
    ...(isRegister ? { address: "", phone: 0 } : {}),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                Don't have an account? <a href="/register">Register</a>
              </RegisterText>
            )}
          </div>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Form;
