import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { adminApi } from "./state/api.ts";
import themeReducer from "./state/index.ts";

// STORE
const store = configureStore({
  reducer: {
    global: themeReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

setupListeners(store.dispatch);
// TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>{null}</Provider>
);

const Test = () => {
  const People = [
    {
      name: "John",
      age: 30,
      city: "New York",
      country: "USA",
      occupation: "Engineer",
    },
    {
      name: "Alice",
      age: 25,
      city: "London",
      country: "UK",
      occupation: "Designer",
    },
    {
      name: "Michael",
      age: 35,
      city: "Sydney",
      country: "Australia",
      occupation: "Teacher",
    },
    {
      name: "Jordan",
      age: 23,
      city: "Manila",
      country: "Philippines",
      occupation: "Engineer",
    },
    // Add more objects as needed
  ];

  // MAP
  const newPeople = People.map((person) => {
    return { ...person, name: person.name.toUpperCase() };
  }).filter((p) => p.age >= 30);
  //    UNIQUE VALUES
  const engr = ["All", ...new Set(People.map((engr) => engr.occupation))];
  // OBJECT KEYS
  const addKey = People.map((person) => {
    return { ...person, citizen: "" };
  });
  console.log(addKey);

  // JSX RETURN
  return (
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
      {engr.join(" ")}
    </div>
  );
};

Test();

ReactDOM.createRoot(document.getElementById("test") as HTMLElement).render(
  <Test />
);
