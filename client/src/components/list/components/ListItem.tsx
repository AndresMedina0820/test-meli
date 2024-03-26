import { Item } from "../../../interfaces/Items";
import FreeShipping from "../../../assets/ic_shipping.png";
import { useTransformPrice } from "../../../hooks/useTransformPrice";

export const ListItem = ({ item }: { item: Item }) => {
  return (
    <li className="list-item">
      <img
        className="list-item__picture"
        src={item.picture}
        alt={item.title}
      />
      <div className="list-item__info">
        <h2>
          {useTransformPrice(item.price.amount, item.price.currency)}
          {item.free_shipping && (
            <img
              className="list-item__info-icon"
              src={FreeShipping}
              alt="envio gratis"
            />
          )}
        </h2>
        <h1>{item.title}</h1>
      </div>
    </li>
  );
};
