export const buildThumbbailUrl = (folder: string, publicId: string) =>
  `${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${folder}/${publicId}`
