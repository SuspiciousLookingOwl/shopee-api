export const ENDPOINT = "https://shopee.co.id/api/v2/search_items/";

export  const NORMALIZED_SEARCH_PARAMETER_KEY = {
	verified: "shopee_verified",
	mall: "official_mall",
	rating: "rating_filter",
	priceMin: "price_min",
	priceMax: "price_max",
	orderType: "order",
	orderBy: "by",
	query: "keyword",
	pageType: "page_type"
} as Record<string, string>;

export const PARAMETER_DELIMITER = {
	shipping: ",",
	locations: ","
} as Record<string, string>;

export const ORDER_BY = {
	RELEVANCY: "relevancy",
	DATE: "ctime",
	SALES: "sales",
	PRICE: "price"
} as const;

export const ORDER_TYPE = {
	DESC: "desc",
	ASC: "asc"
};

export const SHIPPING = {
	SHOPEE_SAME_DAY: 1,
	SHOPEE_STANDARD: 2,
	SHOPEE_INSTANT: 3,
	GRAB_SAME_DAY: 4,
	GRAB_INSTANT: 5,
	GO_SEND_INSTANT: 6,
	GO_SEND_SAME_DAY: 7,
	NINJA: 8,
	JNT: 9,
	JNE_REGULAR: 10,
	JNE_YES: 11,
	JNE_JTR: 12,
	SI_CEPAT_REG: 13,
	SI_CEPAT_HALU: 14,
	INDAH: 15,
	INDOMARET: 16,
	POS_KILAT: 17,
	OVERSEAS: 18,
	ID_EXPRESS: 19
} as const;
