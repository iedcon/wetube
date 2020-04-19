import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
// 함수일 경우 Call로 초기화 해줘야 사용 가능
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
