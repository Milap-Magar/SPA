import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "../graphql/mutation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../hooks/useUser";

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
  font-size: 0.8em;
  color: #333;
`;

const FormContainer = styled.div`
  width: 400px;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
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
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 0.85em;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 6px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;
  margin-bottom: 5px;
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

type Role = "user" | "admin";

interface FormLogin {
  email: string;
  password: string;
  role: Role;
}

interface FormRegister extends FormLogin {
  name: string;
  address: string;
  phone: string;
}

const Form = ({ isRegister }: { isRegister: boolean }) => {
  const [formData, setFormData] = useState<FormLogin | FormRegister>(
    isRegister
      ? {
          email: "",
          password: "",
          role: "user",
          name: "",
          address: "",
          phone: "",
        }
      : { email: "", password: "", role: "user" }
  );
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [register, { loading: registerLoading, error: registerError }] =
    useMutation(REGISTER_MUTATION);
  const [login, { loading: loginLoading, error: loginError }] =
    useMutation(LOGIN_MUTATION);

  const handleRegister = async () => {
    try {
      const registerData = formData as FormRegister;
      const processedPhone = parseInt(registerData.phone || "0", 10);

      const response = await register({
        variables: {
          email: registerData.email,
          password: registerData.password,
          name: registerData.name,
          role: registerData.role,
          address: registerData.address,
          phone: processedPhone.toString(),
        },
      });

      toast.success("Registration Successful!");
      navigate("/");
    } catch (error: any) {
      toast.error(`Registration Failed: ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      const loginData = formData as FormLogin;
      const response = await login({
        variables: {
          email: loginData.email,
          password: loginData.password,
          role: loginData.role,
        },
      });

      const { token, user } = response.data.login;
      // console.log("token: ", token);
      localStorage.setItem("token", token);
      setUser(user);

      navigate("/dashboard");
      toast.success(`Logged in as ${user.name}`);
    } catch (error: any) {
      toast.error(`Error Logging In: ${error.message}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
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
          <div>
            <Label htmlFor="role">Select Role</Label>
            <Select
              id="role"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value as Role })
              }
            >
              <option value="" disabled>
                Select role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Select>
          </div>
          {isRegister && (
            <>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={(formData as FormRegister).name}
                  onChange={handleChange}
                />
              </div>
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
          <Button type="submit" disabled={registerLoading || loginLoading}>
            {registerLoading || loginLoading
              ? "Processing..."
              : isRegister
              ? "Register"
              : "Login"}
          </Button>
          {registerError && (
            <p style={{ color: "red" }}>Error: {registerError.message}</p>
          )}
          {loginError && (
            <p style={{ color: "red" }}>Error: {loginError.message}</p>
          )}
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
