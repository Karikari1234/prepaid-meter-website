"use server";
import axios from "axios";

export async function verifyCaptcha(token: string | null) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  );
  if (res.data.success) {
    console.log(res.data);
    return "success!";
  } else {
    console.log(res.data);
    throw new Error("Failed Captcha");
  }
}
