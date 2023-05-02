import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      title: "Girdosikl Model 1",
      price: 5936.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7177/ZeAQ330JQyEyWBKM0YE2hk3YBguAVQJr0cJLgqIw.jpeg",
    },
    {
      id: 2,
      title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
      price: 3799.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7172/WmMLJi8Q0w5oAldOoRq0lBUb4HQRaIqWwTBE7BZf.png",
    },
    {
      id: 3,
      title: "Girdosikl Model 3",
      price: 4599.99,
      image:
        " https://dreammoto.ru/storage/images/catalog/7173/qqqDvsbIP1FECM5nxu3KnCbOOyM3hC7xy9uuc52Y.png",
    },
    {
      id: 4,
      title: "Girdosikl Model 4",
      price: 3899.99,
      image:
        "https://dreammoto.ru/storage/images/catalog/7177/ZeAQ330JQyEyWBKM0YE2hk3YBguAVQJr0cJLgqIw.jpeg",
    },
    {
      id: 5,
      title: "Girdosikl Model 5",
      price: 2999.99,
      image:
        "https://dreammoto.ru/storage/images/catalog/7172/WmMLJi8Q0w5oAldOoRq0lBUb4HQRaIqWwTBE7BZf.png",
    },
  ],
  reducers: {},
});

export default productsSlice.reducer;
