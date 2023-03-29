export async function cloudinaryUpload(photo): Promise<string> {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "lipjy5de");
    formData.append("cloud_name", "petmigosimages");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/petmigosimages/image/upload",
      {
        method: "post",
        body: formData,
      }
    );
    const data = await response.json();
    return data.url;
  }

export async function uploadImg(photo): Promise<string> {
    if(photo !== undefined){
      const img = await cloudinaryUpload(photo);
      return img
    }
    else
      return undefined;
  }