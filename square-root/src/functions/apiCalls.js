export const findCityFromZip = async () => {
    console.log(zipState.zipCode);
    console.log(process.env.REACT_APP_MYBRING_API);
  
    const response = await fetch(
      new URL(
        "https://api.bring.com/pickuppoint/api/postalCode/NO/getCityAndType/1337.json"
      ),
      {
        method: "get",
        headers: {
          "X-MyBring-API-Uid": process.env.REACT_APP_MYBRING_UID,
          "X-MyBring-API-Key": process.env.REACT_APP_MYBRING_API,
          "X-Bring-Client-URL": process.env.REACT_APP_MYBRING_CLIENT_URL,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Methods": "GET",
        },
      }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .catch((error) => console.log(error));
  
    console.log(response);
  };