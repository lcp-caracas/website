const BASE_URL = 'https://v1.nocodeapi.com/scriptkev/google_sheets/eMzWYBNyTGeqgXlX'
const TabSheetId = 'Reservaciones-13-12-2020'

const fetchPostConfig = {
  method: "post",
  body: JSON.stringify([["NoCodeAPI", "hello@nocodeapi.com"], ["Mohd Danish", "mddanishyusuf@gmail.com"]]),
  headers: {
    "Content-Type": "application/json"
  }
}

export const AddReservation = async reservation => {
  try {
    const res = await fetch(`${BASE_URL}?tabId=${TabSheetId}`, {
      method: "post",
      body: reservation,
      headers: {
        "Content-Type": "application/json",
      }
    })

    const data = await res.json()
    console.log('Success:', JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

// async function callingFn() {
//   try {
//       const response = await fetch("https://v1.nocodeapi.com/scriptkev/google_sheets/eMzWYBNyTGeqgXlX?tabId=<tabId>", {
//           method: "post",
//     body: JSON.stringify([["NoCodeAPI","hello@nocodeapi.com"],["Mohd Danish","mddanishyusuf@gmail.com"]]),
//           headers: {
//               "Content-Type": "application/json"
//           }
//       });
//       const json = await response.json();
//       console.log("Success:", JSON.stringify(json));
//   } catch (error) {
//       console.error("Error:", error);
//   }
// }