export default function formatMenu(url: string): string[] {
  const urls = url.split('/');
  const newUrl = urls.filter((item) => item !== '');
  if (newUrl.length <= 0) {
    return ['home'];
  } else {
    return newUrl;
  }
}
