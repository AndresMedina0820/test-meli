import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Search } from "./components/search/Search";
import { Layout } from "./layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import { Box } from "./components/box/Box";

const List = lazy(() => import("./components/list/List"));
const ItemDetails = lazy(() => import("./components/itemDetails/ItemDetails"));

function App() {
  return (
    <>
      <Search />
      <Layout>
        <Routes>
          <Route
            path="/items"
            element={
              <Suspense fallback={<>Cargando...</>}>
                <List />
              </Suspense>
            }
          ></Route>
          <Route
            path="/items/:id"
            element={
              <Suspense fallback={<>Cargando...</>}>
                <ItemDetails />
              </Suspense>
            }
          ></Route>
          <Route
            path="*"
            element={
              <Box>
                <NotFound />
              </Box>
            }
          ></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
