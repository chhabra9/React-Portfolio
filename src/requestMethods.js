//jshint esversion:8
const Base_URL="http://localhost:5000";

export const publicRequest=axios.create({
    baseURL:Base_URL,
});
