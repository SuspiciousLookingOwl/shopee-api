import { Product, SearchParameters } from "./types";
import fetch from "node-fetch";
import * as c from "./constants";
import { parameterToSearchQuery } from "./helper";
import { toCamel } from "snake-camel";
import Shopee from "../../Shopee";


export async function search(this: Shopee, parameters: Partial<SearchParameters> = {}): Promise<Product[]> {
	parameters = {
		version: 2,
		newest: 0,
		pageType: "search",
		official: 0,
		verified: 0,
		orderBy: c.ORDER_BY.RELEVANCY,
		orderType: c.ORDER_TYPE.DESC,
		query: "",
		priceMin: 0,
		priceMax: 0,
		limit: 50,
		rating: 0,
		shippings: [],
		locations: [],
		...parameters
	};
	
	const response = await fetch(`${this.API_URL}${c.ENDPOINT}?${await parameterToSearchQuery(parameters)}`, {
		headers: { "if-none-match-": "*" }
	});

	return (await response.json()).items.map(toCamel);
}