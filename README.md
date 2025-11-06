# 🎥 LRV to MP4 Renamer (Node.js Script)

## 📝 Description

This **Node.js script** automatically **renames** all `.lrv` (Low Resolution Video) files found in the directory where the script is executed, changing their extension to **`.mp4`**.

This is particularly useful for certain action cameras (like GoPro) that create `.lrv` files as low-resolution proxies alongside the main high-resolution files. Often, these `.lrv` files contain a fully playable, lower-quality MP4 stream, but are not recognized by players until the extension is changed.

## ✨ Features

* **Batch Renaming:** Processes all `.lrv` files in the current directory.
* **Safety Check:** Ensures that the corresponding `.mp4` file **does not already exist** before renaming to prevent accidental overwriting.
* **Clear Feedback:** Displays a log for each file successfully renamed, those ignored, and any errors encountered.
* **Summary:** Provides a final count of files renamed.

## 🛠️ Prerequisites

To run this script, you must have **Node.js** installed on your system.

* [Download Node.js](https://nodejs.org/)

## 📥 Installation and Setup

1.  **Save the Script:** Save the provided code into a file named **`convert-lrv.js`** (or any other name ending with `.js`).
2.  **Open Terminal/Command Prompt:** Navigate to the directory where you saved the script.

## 🏃 Usage

### **Step 1: Place the script**

Copy the `convert-lrv.js` script into the folder containing your `.lrv` files (e.g., your camera's video folder).

### **Step 2: Run the script**

Execute the script using the following command in your Terminal or Command Prompt:

```bash
node convert-lrv.js
