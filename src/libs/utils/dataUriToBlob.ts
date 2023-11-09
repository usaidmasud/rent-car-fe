export function dataURItoBlob(dataURI: any) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

export function blobToFile(blob: any, fileName: string, mimeType: string) {
  const options = { type: mimeType };
  const file = new File([blob], fileName, options);
  return file;
}
