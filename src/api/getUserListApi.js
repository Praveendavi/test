import axios from "axios";

const getUserListApi = async (params) => {
  const response = await axios({
    url: "https://reqres.in/api/users",
    method: "get",
    params: params,
  });
  return response;
};

export default getUserListApi;
