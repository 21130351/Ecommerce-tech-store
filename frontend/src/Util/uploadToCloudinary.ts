export const uploadToCloudinary = async (pics: any) => {
  const cloud_name = "dt4ifztb9";
  const upload_preset = "eshop_upload";

  if (!pics) {
    console.log("error : pic not found");
    return null;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", upload_preset);

  try {
    // Dung template literal (backtick) de "${cloud_name}" duoc interpolate dung
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      console.log("Cloudinary upload failed with status:", res.status);
      return null;
    }

    const fileData = await res.json();
    // "secure_url" la duong link https, nen dung cai nay thay vi "url" (http)
    return fileData.secure_url;
  } catch (error) {
    console.log("error uploading to Cloudinary:", error);
    return null;
  }
};