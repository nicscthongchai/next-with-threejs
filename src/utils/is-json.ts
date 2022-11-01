function isJSON(obj: any) {
  try {
    JSON.parse(obj);
    return true;
  } catch (error) {
    return false;
  }
}

export default isJSON;
