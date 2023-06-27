export const createFileFormData = (file: File) => {
  const bodyFormData = new FormData()
  bodyFormData.append('file', file)
  return bodyFormData
}
