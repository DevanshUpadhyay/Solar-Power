import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

// conatct form
export const contact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, message, subject } = req.body;
  if (!name || !email || !message || !subject) {
    return next(new ErrorHandler("Please add all fields", 400));
  }
  const to = process.env.MY_MAIL;
  // const subject = "Contact from solar";
  const text = `I am ${name} and my email is ${email}.\n ${message}.`;
  await sendEmail(to, subject, text);
  res.status(200).json({
    success: true,
    message: "Your Message has been Sent.",
  });
});
