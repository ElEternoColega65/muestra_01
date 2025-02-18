import { configureStore } from "@reduxjs/toolkit";

import { homeApiSlice } from "../../features/home/redux/homeApiSlice";
import { productDetailsApiSlice } from "../../features/productDetails/redux/productDetailsApiSlice";
import { newsApiSlice } from "../../features/news/redux/newsApiSlice";
import { offersApiSlice } from "../../features/offers/redux/offersApiSlice";
import { topsApiSlice } from "../../features/tops/redux/topsApiSlice";
import { playstationFiveApiSlice } from "../../features/playstationFive/redux/playstationFiveApiSlice";
import { playstationFourApiSlice } from "../../features/playstationFour/redux/playstationFourApiSlice";
import { xboxSeriesXApiSlice } from "../../features/xbox/redux/xboxSeriesXApiSlice";
import { pcApiSlice } from "../../features/pc/redux/pcApiSlice";
import { nintendoSwitchApiSlice } from "../../features/nintendoSwitch/redux/nintendoSwitchApiSlice";

export const store = configureStore({
  reducer: {
    [homeApiSlice.reducerPath]: homeApiSlice.reducer,
    [productDetailsApiSlice.reducerPath]: productDetailsApiSlice.reducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    [offersApiSlice.reducerPath]: offersApiSlice.reducer,
    [topsApiSlice.reducerPath]: topsApiSlice.reducer,
    [playstationFiveApiSlice.reducerPath]: playstationFiveApiSlice.reducer,
    [playstationFourApiSlice.reducerPath]: playstationFourApiSlice.reducer,
    [xboxSeriesXApiSlice.reducerPath]: xboxSeriesXApiSlice.reducer,
    [pcApiSlice.reducerPath]: pcApiSlice.reducer,
    [nintendoSwitchApiSlice.reducerPath]: nintendoSwitchApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      homeApiSlice.middleware,
      productDetailsApiSlice.middleware,
      newsApiSlice.middleware,
      offersApiSlice.middleware,
      topsApiSlice.middleware,
      playstationFiveApiSlice.middleware,
      playstationFourApiSlice.middleware,
      xboxSeriesXApiSlice.middleware,
      pcApiSlice.middleware,
      nintendoSwitchApiSlice.middleware,
    )
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;