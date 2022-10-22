/**
 * 邮件发送
 */
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = {
  email: {
    service: 'QQ',
    user: '',
    pass: '',
  }
}

sendSmtpTransport = nodemailer.createTransport(smtpTransport({
  service: config.email.service,
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
}));

var sendMail = function (replyObj) {

  sendSmtpTransport.sendMail({
    from: config.email.user,
    to: replyObj.recipient,
    subject: `${replyObj.subject} 你有新邮件了, 请查收`,
    html: replyObj.html

  }, function (error, response) {
    if (error) {
      console.log(error);
    }
    console.log('发送成功')
  });
}

module.exports = sendMail;