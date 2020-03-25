const windowFetchError =
  "We have run into an error. You do not seem to have the window.fetch api. Please get a standard compliant browser like firefox.";

export const download = async url => {
  if (window.fetch) {
    try {
      const data = await fetch(url).then(res =>
        res.json().catch(err => console.error("Error: ", err))
      );

      return data
    } catch (err) {
      alert(windowFetchError);
      console.error(windowFetchError);
      throw new Error(err);
    }
  } else {
    alert(windowFetchError);
    throw new Error(windowFetchError);
  }
};

export const downloadJSON = async url => {
  try {
    const data = await download(url)
    return JSON.parse(data)
  } catch (err) {
    throw new Error(err)
  }
}
