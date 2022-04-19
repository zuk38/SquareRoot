import * as AWS from "aws-sdk";
import awsmobile from "../aws-exports";

function generateHTMLInquiryEmail(email, values) {
    return `<!DOCTYPE html> 
 <html>    
 <head>      
     <meta charset='UTF-8' /> 
     <title></title>  
  </head>    
   <body>
    <p> ${values.message} </p>
    <br/>
    <p> Name: ${values.name}</p>
    <p> Send from: ${values.email}</p>
    <p> Phone: ${values.phone}</p>
    <p> Location: ${values.location}</p>
    <p> Consent: ${values.consent ? 'checked' : 'unchecked'}</p>
   </body> 
 </html> `
}

export function sendAWSEmail(email, values) {
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: awsmobile.aws_cognito_identity_pool_id
    });
    AWS.config.update({region: 'eu-north-1'});

    const params = {
        Destination: {BccAddresses: [], CcAddresses: [], ToAddresses: [email]},
        Message: {
            Body: {Html: {Data: generateHTMLInquiryEmail(email, values), Charset: 'UTF-8'}},
            Subject: {Data: values.subject || 'Contact from website', Charset: 'UTF-8'}
        },
        Source: 'orders@squareroot.cc',
        ReplyToAddresses: [email],
        ReturnPath: 'orders@squareroot.cc'
    }

    return new AWS.SES().sendEmail(params).promise();
}
