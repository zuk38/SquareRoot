export const findCityFromZip = async (zipCode) => {
  const response = await fetch(
    new URL(
      "https://api.bring.com/pickuppoint/api/postalCode/NO/getCityAndType/" +
        zipCode.toString() +
        ".json"
    ),
    {
      method: "get",
      headers: {
        "X-MyBring-API-Uid": process.env.REACT_APP_MYBRING_UID,
        "X-MyBring-API-Key": process.env.REACT_APP_MYBRING_API,
        "X-Bring-Client-URL":
          "https://frozen-savannah-66620.herokuapp.com/https://localhost:3000/",
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

  if (response) {
    let city = response.postalCode.city.toString();
    city = city.slice(0, 1) + city.slice(1, city.length).toLowerCase();
    return city;
  }
  return null;
};
