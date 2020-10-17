import { search, constants as searchConstants } from "./api/search";


class Shopee {
	private baseUrl: string;
	private apiVersion: string;

	static SEARCH = searchConstants;

	static BASE_URL = {
		SINGAPORE: "https://shopee.sg",
		MALAYSIA: "https://shopee.my",
		THAILAND: "https://shopee.co.th",
		TAIWAN: "https://shopee.tw",
		INDONESIA: "https://shopee.co.id",
		VIETNAM: "https://shopee.com.vn",
		PHILIPPINES: "https://shopee.ph",
		BRAZIL: "http://shopee.com.br"
	}

	constructor(baseUrl = "https://shopee.co.id", apiVersion = "v2") {
		this.baseUrl = baseUrl;
		this.apiVersion = apiVersion;
	}

	protected get API_URL(): string {
		return `${this.baseUrl}${ this.baseUrl.endsWith("/") ? "" : "/" }api/${this.apiVersion}/`;
	}

	search = search;
}

export default Shopee;