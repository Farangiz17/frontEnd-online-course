import axios from "axios";

// const instance = axios.create({
//   // baseURL: 'https://fastapi.modme.uz/api/v1/leads/lead',
//   baseURL: "https://api.modme.uz/v1/create_lead",
//   headers: {
//     Accept: "*/*",
//     "Content-Type": "application/json",
//   },
// });

class Leads {
  async newLead(data) {
    // let newData = {
    //   ...data,
    //   branch_id: 3692,
    //   comment: "Saytdan Yangi Lid",
    //   course: "Front-end",
    //   section: "Saytdan",
    // };
    // let params = "";
    // for (const key in newData) {
    //   params += key + "=" + newData[key] + "&";
    // }

    // .post(`https://fastapi.modme.uz/api/v1/leads/lead?${params}`)
    let lead = await axios
      .post("https://api.modme.uz/v1/create_lead", data)
      .then((ress) => {
        return ress.data;
      })
      .catch((err) => {
        return err;
      });

    return lead;
  }
}

export default new Leads();
