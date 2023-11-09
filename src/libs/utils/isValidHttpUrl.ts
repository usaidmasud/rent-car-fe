export const isValidHttpUrl = (value: string) => {
  let url;

  try {
    url = new URL(value);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const isValidImageUrl = (
  url: string,
  defaultUrl = '/assets/img/avatar.svg'
): string => {
  return isValidHttpUrl(url) ? url : defaultUrl;
};
