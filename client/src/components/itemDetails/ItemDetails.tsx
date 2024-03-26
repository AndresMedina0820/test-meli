import { useParams } from "react-router-dom";
import { Box } from "../box/Box";
import { Breadcrumb } from "../breadcrumb/Breadcrumb";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ResponseItem, SafeAny } from "../../interfaces/Items";
import { useEffect, useState } from "react";
import { baseApi } from "../../api/baseApi";
import { Loading } from "../loading/Loading";
import { Price } from "./components/Price";
import NotFound from "../NotFound/NotFound";

const ItemDetails = () => {
  const { id } = useParams<{ id: string }>();
  const url = `${baseApi}/${id}`;

  const [data, setData] = useState<ResponseItem>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json: ResponseItem = await response.json();
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
      <Box customClass="p-32">
        {loading ? (
          <Loading />
        ) : (
          <>
            {data && data.item && !error ? (
              <>
                <section className="details">
                  <div className="details__picture">
                    <img src={data.item.picture} alt={data.item.title}></img>
                  </div>
                  <div className="details__info">
                    <div>
                      <p>{data.item.condition}</p>
                      <h1>{data.item.title}</h1>
                    </div>
                    <h2>
                      <Price amount={data.item.price.amount} currency={data.item.price.currency} />
                    </h2>
                    <button>Comprar</button>
                  </div>
                </section>
                <div className="details-description">
                  <h3>Descripción del producto</h3>
                  <p>{data.item.description}</p>
                </div>
              </>
            ) : (
              <NotFound />
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default ItemDetails;
