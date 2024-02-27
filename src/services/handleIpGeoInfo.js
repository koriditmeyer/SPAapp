
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../redux/amazonSlice";
import axios from "axios";

const HandleIpGeoInfo = async () => {
  const dispatch = useDispatch();
  try {
    const result = await axios.get("https://ipapi.co/json/");
    console.log(result)
    const data ={
      city_locality: result.data.city,
      postal_code: result.data.postal,
      country_code: result.data.country_name,
      languages: result.data.languages,
      currency: result.data.currency,
      country_calling_code: result.data.country_calling_code,
    }
    console.log(data)
    dispatch(updateUserInfo(data));
  } catch (error) {
    console.log(error);
  }
};
export default HandleIpGeoInfo;
