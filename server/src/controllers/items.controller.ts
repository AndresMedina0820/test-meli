import { Request, Response } from "express";
import {
  getItemsService,
  getItemsByIdService,
  getItemDescriptionService,
  getItemCategoryService,
} from "../services/items.services";

import { Author, Item, ResponseItems, SafeAny } from "../types";

export const getItems = async (req: Request, res: Response): Promise<void> => {
  const { search } = req.query;
  const limit = req.query?.limit ?? 4;

  const { results } = await getItemsService(String(search), Number(limit));
  const categoryId = getMainCategory(results.map((r: SafeAny) => r?.category_id ?? ''));
  const category = categoryId ? await getItemCategoryService(categoryId) : '';

  const response: ResponseItems = {
    author: res.author as Author,
    categories: category && category.path_from_root.map((c: {id: string, name: string}) => c.name) || [''],
    items: results.map((item: SafeAny) => mappingItemResponse(item)),
  };

  res.status(201).json(response);
};

export const getItemId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const itemResponse = await getItemsByIdService(id);
  const description = await getItemDescriptionService(id);
  const categories = await getItemCategoryService(itemResponse.category_id);

  const item = mappingItemResponse(itemResponse);

  const response = {
    author: res.author as Author,
    item: {
      ...item,
      description: description?.plain_text,
      sold_quantity: itemResponse.sold_quantity,
    },
    categories:
      categories &&
      categories.path_from_root.map(
        (c: { id: string; name: string }) => c.name
      ),
  };

  res.status(201).json(response);
};

const mappingItemResponse = (item: SafeAny): Item => {
  return {
    id: item?.id,
    title: item?.title,
    price: {
      currency: item?.currency_id,
      amount: item?.price.toFixed(0),
      decimals: item?.price % 1,
    },
    picture: item?.thumbnail,
    condition: item?.condition || "",
    free_shipping: item?.shipping?.free_shipping || false,
  };
};

const getMainCategory = (categories: string[]) => {
  const count: { [key: string]: number } = {};

  categories.forEach((c) => {
    if (!count[c]) {
      count[c] = 1;
    } else {
      count[c]++;
    }
  });

  let string = "";
  let max = 0;

  for (const key in count) {
    if (count[key] > max) {
      max = count[key];
      string = key;
    }
  }
  return string;
};
