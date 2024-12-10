import jwt from "jsonwebtoken";

export const verifyToken = ({ token }: { token: string }) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }
  try {
    const decodedToken = jwt.verify(token, secret);
    console.log("🚀 ~ verifyToken ~ decodedToken:", decodedToken);
    return decodedToken;
  } catch (error) {
    throw new Error("Invalid or Expired token");
  }
};
