import fs from 'fs';
import path from 'path';

/**
 * Function to dynamically read all image filenames from the folder
 */
export function getImages() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => `/images/${filename}`);
}
