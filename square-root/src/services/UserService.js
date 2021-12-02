const AWS = require('aws-sdk');
/*const SESConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  accessSecretKey: process.env.AWS_SECRET_KEY,
  region: 'eu-north-1',
};
AWS.config.update(SESConfig);

const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
var params = {
  UserPoolId: config.aws_user_pools_id,
};*/

/*import { CognitoIdentityProviderClient, ListUsersCommand } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({ region: "eu-west-2" });
const params = {};
const command = new ListUsersCommand({ UserPoolId: "My_User_Pool_Id" });

try {
    const data = await client.send(command);
    return this.setState({ users: data });
} catch (error) {
    console.error(error);
    return this.setState({ error: error });
} finally {
    this.setState({ loading: false });
}

const client = new AWS.CognitoIdentityProviderClient({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

exports.listGroups = () => {
  AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
      console.log('Access key:', AWS.config.credentials.accessKeyId);
    }
  });
};*/
