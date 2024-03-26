import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { baseApi } from "../../api/baseApi";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Item, ResponseItems, SafeAny } from "../../interfaces/Items";
import NotFound from "../NotFound/NotFound";
import { Box } from "../box/Box";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
import { Loading } from "../loading/Loading";
import { ListItem } from "./components/ListItem";

const List = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const params = searchParams.get("search");
  const url = `${baseApi}?search=${params}`;

  const [data, setData] = useState<ResponseItems>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json: ResponseItems = await response.json();
        setData(json);
        setLoading(false);
      } catch (error: SafeAny) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  return (
    <>
      <Breadcrumb categories={data?.categories} />
      <Box>
        {loading ? (
          <Loading />
        ) : (
          <>
            {data && data.items.length > 0 && !error ? (
              <ul>
                {data &&
                  data.items.map((item: Item) => (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <ListItem item={item} />
                    </Link>
                  ))}
              </ul>
            ) : (
              <NotFound />
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default List;
