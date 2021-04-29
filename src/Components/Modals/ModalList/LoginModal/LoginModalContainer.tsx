import admin from "Api/admin";
import { useState } from "react";

export const useLogin = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const TryLogin = async () => {
    try {
      const res = await admin.login(id, pass);
      localStorage.setItem("themoment_token", res.data.data.accessToken);
      localStorage.setItem(
        "themoment_token_refresh",
        res.data.data.refreshToken
      );
    } catch (e) {
      alert("로그인에 실패하셨습니다.");
    }
  };

  return [setId, setPass, TryLogin];
};
