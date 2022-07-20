import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = authorization.split(" ")[1];

      // verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Get User from Token
      req.user = await UserModel.findById(userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .send({ status: "failed", message: " Unauthorised User." });
    }
  }

  if (!token) {
    res
      .status(401)
      .send({ staus: "failed", message: "Unauthorised User, No Token" });
  }
};

export default checkUserAuth;
