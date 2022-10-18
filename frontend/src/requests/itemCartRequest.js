import axios from "axios"


export const addOrCreateItemCartRequest = async (data, thunkAPI) => {
  const { shoppingCart } = thunkAPI.getState()

  if (shoppingCart.id) {
    return axios.post(`/api/itemCart`, data)
      .then(() => {
        return axios.get(`/api/itemCart/${shoppingCart.id}`)
          .then(res => {
            const items = res.data;
            const total = parseInt(
              items
                .map(({ quantity, product }) => quantity * product.price)
                .reduce((total, i) => total + i, 0)
            );
            return axios
              .put(`/api/shoppingCart/total`, { id: shoppingCart.id, total })
              .then(() => res.data);
          });
      })
      .catch(err => console.log(err))
  };
};

export const deleteItemCartRequest = async (id, thunkAPI) => {
  const { shoppingCart } = thunkAPI.getState()

  if (shoppingCart.id) {
    return axios.delete(`/api/itemCart/remove/${id}`)
      .then(() => {
        return axios.get(`/api/itemCart/${shoppingCart.id}`)
          .then(res => {
            const items = res.data;
            const total = parseInt(
              items
                .map(({ quantity, product }) => quantity * product.price)
                .reduce((total, i) => total + i, 0)
            );
            return axios.put(`/api/shoppingCart/total`, { id: shoppingCart.id, total })
              .then(() => res.data);
          });
      })
      .catch(err => console.log(err))
  }
};

export const getItemCartRequest = async (data, thunkAPI) => {
  const { shoppingCart } = thunkAPI.getState()

  try {
    const getItemCard = await axios.get(`/api/itemCart/${shoppingCart.id}`)
    return getItemCard
  } catch (error) {
    throw error
  }
};