import fs from 'fs';
import path from 'path';

/**
 * Function to dynamically read all image filenames from the folder
 */
export function getImages(folderPath) {
  const imagesDirectory = path.join(process.cwd(), folderPath);
  const filenames = fs.readdirSync(imagesDirectory);

  // Filter filenames to include only .jpeg, .jpg, and .png and exclude .DS_Store

  const imageFiles = filenames.filter((filename) => {
    const ext = path.extname(filename).toLowerCase(); // Get file extension
    return (
      (ext === '.jpeg' || ext === '.jpg' || ext === '.png'|| ext==='.gif')
    );

  });
  // Remove the public path  /public/images/draw/ -> /images/draw/
  const newFolderPath = folderPath.replace('public/', '/')
  // Map the filtered filenames to their full path
  return imageFiles.map((filename) => `${newFolderPath}/${filename}`);
}
