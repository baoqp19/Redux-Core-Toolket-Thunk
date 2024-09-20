import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/filters/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default store;
