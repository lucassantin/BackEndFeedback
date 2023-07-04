import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "77bdc0adbf9fc4",
      pass: "46c45a8892ddf5"
    }
  });

export class NodeMailerAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <kititabusiness@gmail.com>",
            to:"Lucas Santin <lucasdossantossantin@gmail.com>",
            subject,
            html: body,
        });
   };
} 