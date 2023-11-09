const isNull = (value: any) => {
  if (
    value === '' ||
    // value === 0 ||
    value === 'Null' ||
    value === false ||
    value === isNaN ||
    value === null ||
    value === 'Invalid Date' ||
    value === undefined ||
    value.length === 0 ||
    value === -1 ||
    value === ''
  ) {
    return true;
  } else {
    return false;
  }
};

export default isNull;
