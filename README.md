# 🌩️ cloudinary-upload-helper

A lightweight utility to easily upload images to **Cloudinary** and get their public URL.

---

## ✨ Features

- 📤 Upload images directly to Cloudinary
- 🔗 Instantly receive the public image URL
- ⚡ Super simple, no setup headaches

---

## 📦 Installation

To install the package, use npm:

```bash
npm install cloudinary-upload-helper


🛠️ Usage Guide
1️⃣ Import the Function
To get started, import the function in your code:
import { getPublicUrl } from 'cloudinary-upload-helper';

2️⃣ Upload a File
Use the getPublicUrl function to upload a file:
const imageUrl = await getPublicUrl(file, uploadPreset, cloudName);
Here are the parameters required:

Parameter	Description
file	Image file object (e.g., from <input type="file" />)
uploadPreset	Your Cloudinary unsigned upload preset name
cloudName	Your Cloudinary cloud name

🧪 Example: React Component
Here's an example of how you can use the package in a React component to upload an image and get its public URL:

import React, { useState } from "react";
import { getPublicUrl } from "cloudinary-upload-helper";

function App() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const uploadPreset = "your-upload-preset"; // Replace this with your preset name
    const cloudName = "your-cloud-name";       // Replace this with your Cloudinary cloud name

    const url = await getPublicUrl(file, uploadPreset, cloudName);
    setImageUrl(url);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" width="200" />}
    </div>
  );
}

export default App;
🔐 How to Get Your Cloudinary Credentials
To get your Cloudinary details, follow these steps:

Go to the Cloudinary Console and log in or sign up.

On the top-left, copy your Cloud Name.

In the left sidebar, click the ⚙️ Settings icon.

Go to the Upload tab.

Scroll to Upload Presets and click Add Upload Preset:

Name your preset (e.g., my-preset).

Set Signing Mode to unsigned.

Leave the remaining settings as default.

Click Save.

Now, use your cloudName and uploadPreset in your code.


🧠 Notes
Unsigned preset is required for uploading images.

This package only supports image uploads (JPG, PNG, etc.).

It does not support signed uploads at the moment#   c l o u d y - u p l o a d - n p m - p a c k a g e  
 