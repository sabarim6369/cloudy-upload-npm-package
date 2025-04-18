# ☁️ cloudy-upload

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
npm install cloudy-upload
```

---

## 🛠️ Usage Guide

### 1️⃣ Import the Function

To get started, import the function in your code:

```js
import { getPublicUrl } from 'cloudy-upload';
```

### 2️⃣ Upload a File

Use the `getPublicUrl` function to upload a file:

```js
const imageUrl = await getPublicUrl(file, uploadPreset, cloudName);
```

#### Parameters

| Parameter      | Description                                                  |
|----------------|--------------------------------------------------------------|
| `file`         | Image file object (e.g., from `<input type="file" />`)       |
| `uploadPreset` | Your Cloudinary unsigned upload preset name                  |
| `cloudName`    | Your Cloudinary cloud name                                   |

---

## 🧪 Example: React Component

Here’s an example of how to use the package in a React component:

```jsx
import React, { useState } from "react";
import { getPublicUrl } from "cloudy-upload";

function App() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const uploadPreset = "your-upload-preset"; // Replace with your preset
    const cloudName = "your-cloud-name";       // Replace with your Cloudinary name

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
```

---

## 🔐 How to Get Your Cloudinary Credentials

1. Go to the [Cloudinary Console](https://cloudinary.com/console) and log in or sign up.
2. On the top-left, copy your **Cloud Name**.
3. Click the ⚙️ **Settings** icon in the sidebar.
4. Navigate to the **Upload** tab.
5. Scroll to **Upload Presets** and click **Add Upload Preset**:
   - Name your preset (e.g., `my-preset`).
   - Set **Signing Mode** to **unsigned**.
   - Leave the rest as default.
6. Click **Save**.

Use your `cloudName` and `uploadPreset` in your code.

---

## 🧠 Notes

- This package only supports image uploads (JPG, PNG, etc.)
- Unsigned preset is required for uploading images
- Does not currently support signed uploads

---

## 👨‍💻 Author

Made with ❤️ by [sabarim6369](https://github.com/sabarim6369)

---

## 📄 License

ISC

