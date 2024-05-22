/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import config from "../Config";
import { IBookingInfo } from "../types/common";

const BookingConfirmationMail = (name: string, email: string, payload:IBookingInfo) => {
  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: `${config.app_name} Booking Confirmation 🎉`,
    html: `
        <div><h4>Dear ${name},</h4>
        <p>Thank you for choosing ${config.app_name} for your upcoming stay. We're delighted to confirm your booking for ${payload.date}. Your room, ${payload.roomNo}, is reserved for you.</p>

        <p>If you have any special requests or need further assistance, feel free to reach out to us. We're here to ensure you have a comfortable and enjoyable stay with us.</p></div>

        <p>Looking forward to welcoming you soon!</p>

        <p>Regards,</p>
        <p>${config.app_name} Team</p>
        <p>1205, Dhaka, Bangladesh</p>
    `,
  };

  transporter.sendMail(
    mailOptions,
    function (error: any, info: { response: any }) {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.info("Email sent:", info.response);
      }
    }
  );
};

const BookingCancelationMail = (name: string, email: string, payload:IBookingInfo) => {
  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  });

  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: `${config.app_name} Booking Cancellation Notification 🚫`,
    html: `
        <div><h4>Dear ${name},</h4>
        <p>We hope this email finds you well. We regret to inform you that your booking for ${payload.date} has been cancelled as per your request.</p>

        <p>If you have any questions or need assistance with revoking or any other inquiries, please don't hesitate to contact us. We're here to help.</p></div>

        <p>We appreciate your understanding and hope to have the opportunity to welcome you back in the future.</p>

        <p>Regards,</p>
        <p>${config.app_name} Team</p>
        <p>1205, Dhaka, Bangladesh</p>
    `,
  };

  transporter.sendMail(
    mailOptions,
    function (error: any, info: { response: any }) {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.info("Email sent:", info.response);
      }
    }
  );
};

export const EmailService = {
  BookingConfirmationMail,
  BookingCancelationMail,
};

