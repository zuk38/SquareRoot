exports.handler = function afterConfirmationTrigger(event, context, callback) {
  const AWS = require("aws-sdk");
  const cognitoISP = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-18",
  });

  // the user attribute 'custom:role' was set on User Sign Up.  Here, we are
  // using it as a flag. Depending on its value, add to a specified group.

  let groupName = event.request.userAttributes["custom:role"];
  if (groupName === "Real Estate Developer") {
    groupName = "REDs";
  } else if (groupName === "Landscape Architect") {
    groupName = "LARKs";
  } else if (groupName === "Landscape Entrepreneur") {
    groupName = "LENTs";
  }

  const params = {
    GroupName: groupName,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  cognitoISP
    .adminAddUserToGroup(params) //add the user to specified group
    .promise()
    .then(() => callback(null, event)) //yay, return to amazon cognito
    .catch((err) => callback(err, event)); // uh oh, an error
};
