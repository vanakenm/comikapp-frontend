// This is fixed, we'll see later how to update it.
const url = "http://localhost:5000/";

const Api = {
  getRecipes: async () => {
    const response = await fetch(url + "recipes");
    return response.json();
  },
  getMyComicsList: async () => {
    const response = await fetch(url + "mycomics");
    return response.json();
  },

  addComic: async (comic) => {
    const response = await fetch(url + "addcomic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comic),
    });
    return response.json();
  },
};

export default Api;
