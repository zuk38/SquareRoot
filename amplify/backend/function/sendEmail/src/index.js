const AWS = require("aws-sdk");
const SES = new AWS.SES();

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;

function sendEmailToSqr(formData) {
  const emailParams = {
    Source: EMAIL_ADDRESS,
    ReplyToAddresses: ["noReply@squareroot.cc"],
    Destination: {
      ToAddresses: [EMAIL_ADDRESS],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `You have a new contact request: \n\n"${formData.message}" \n\nName: ${formData.name} \n\nE-mail: ${formData.email} \n\nPhone: ${formData.phone} \n\nLocation: ${formData.location}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New message from squareroot.cc",
      },
    },
  };

  const promise = SES.sendEmail(emailParams).promise();
  console.log(promise);
  return promise;
}

exports.handler = event => {
  console.log("Send email called");

  //grab what is in the event object - first record
  //element that is coming from dynamodb table
  //first element because batchSize is 1
  const dynamodb = event.Records[0].dynamodb;
  console.log(dynamodb);

  const formData = {
    name: dynamodb.NewImage.name.S,
    email: dynamodb.NewImage.email.S,
    message: dynamodb.NewImage.message.S,
    phone: dynamodb.NewImage.phone ? dynamodb.NewImage.phone.S : "",
    location: dynamodb.NewImage.location ? dynamodb.NewImage.location.S : "",
  };
  console.log(formData);

  return sendEmailToSqr(formData)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
