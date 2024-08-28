import axios from "axios";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqdW5zdWs4OTYwQG5hdmVyLmNvbSIsImlhdCI6MTcyNDgyMjkwMywiZXhwIjoxNzI0ODY2MTAzfQ.eDihDnI87Bos9-ZJEpNiQklKIe9RT_96LuJq4DEp5J4";
const data = {
  name: "SW ACADEMY",
  representativeImg:
    "https://ssu.ac.kr/wp-content/uploads/2019/05/suu_emblem1.jpg",
  description: "워크숍합니다.",
  relatedLink: "https://www.naver.com/",
};
export const createNetwork = async (data) => {
  try {
    const response = await axios.post(
      "http://54.180.236.193:8080/networkings",
      data,
      {
        headers: { Authorization: token },
      }
    );
    console.log("응답 : ", response);
    localStorage.setItem("networkingId", response.data.data.networkingId);
    return response;
  } catch (error) {
    console.log(error);
  }
};
