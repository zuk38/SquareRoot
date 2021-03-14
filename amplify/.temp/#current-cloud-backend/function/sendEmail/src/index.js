const AWS = require('aws-sdk');
const SES = new AWS.SES();

const TO_EMAIL_ADDRESS = process.env.TO_EMAIL_ADDRESS;

function sendEmailToSquareRoot(formData) {
    const emailParams = {
        Source: TO_EMAIL_ADDRESS, 
        ReplyToAddresses: ['noReply@email.com'],
        Destination: {
          ToAddresses: [TO_EMAIL_ADDRESS], 
        },
        Message: {
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: `You have a new contact request: ${formData.message} from:\n\n Name: ${formData.name}\n Email: ${formData.email}\n`,
            },
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'New message from squareroot.com',
          },
        },
    };

    console.log(emailParams)

    const promise =  SES.sendEmail(emailParams).promise();
    console.log(promise);
    return promise
}


exports.handler = event => {
    console.log("Send email called");
    console.log(event)
    //grab what is inside the event object
    //this is what is coming from dynamodb
    //only first record cause batchSize is set to 1
    const dynamoDb = event.Records[0].dynamodb; 
    console.log(dynamoDb);
    
    //grab what was inserted to dynamo table
    const formData = {
        name: dynamoDb.NewImage.name.S,
        message: dynamoDb.NewImage.message.S,
        email: dynamoDb.NewImage.email.S
    }
    console.log(formData);

    return sendEmailToSquareRoot(formData).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}