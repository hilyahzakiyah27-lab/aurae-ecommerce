import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
  console.log("API Key:", process.env.CLOUDINARY_API_KEY);
  console.log("API Secret Exists:", !!process.env.CLOUDINARY_SECRET_KEY);
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

cloudinary.api
  .ping()
  .then((res) => console.log("PING OK:", res))
  .catch((err) => console.log("PING GAGAL:", JSON.stringify(err, null, 2)));

export default connectCloudinary;
