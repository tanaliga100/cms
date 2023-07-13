import axios from "axios";
import { User } from "../pages/geo/GeoPage";

export const convertGeo = async (users: User[]): Promise<void> => {
  await Promise.all(
    users.map(async (user) => {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${user.city},${user.country}&key=${process.env.GEO_API}`;

      try {
        const response = await axios.get(apiUrl);
        const { results } = response.data;
        if (results.length > 0) {
          const { lat, lng } = results[0].geometry;
          return { ...user, latitude: lat, longitude: lng };
        }
      } catch (error: any) {
        console.log(error);
      }
      return user;
    })
  );
};
