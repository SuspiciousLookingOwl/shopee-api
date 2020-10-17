# Shopee

Simple API Wrapper for Shopee. Intended for usage in Node environment.

---

## Installation
```
npm i shopee
```

---

## Example
```js

const Shopee = require("shopee");

const shopee = new Shopee(Shopee.BASE_URL.INDONESIA);

async function run() {
    const product = await shopee.search({
        query: "RTX 2080",
        orderBy: Shopee.SEARCH.ORDER_BY.PRICE,
        orderType: Shopee.SEARCH.ORDER_TYPE.ASC,
        shippings: [
            Shopee.SEARCH.SHIPPING.JNE_REGULAR,
            Shopee.SEARCH.SHIPPING.SI_CEPAT_REG
        ],
        locations: ["Jawa Barat", "Jabodetabek"],
        priceMax: 30000000
    });
    console.log(product[0].name);
}

run();
```

[Check out product output example](example/product.js)

## API

#### `new Shopee(baseUrl, apiVersion = "v2")`

Creates new Shopee instance.

`baseUrl` is Shopee url based on the region, `baseUrl` value can be:
```
SINGAPORE: "https://shopee.sg"
MALAYSIA: "https://shopee.my"
THAILAND: "https://shopee.co.th"
TAIWAN: "https://shopee.tw",
INDONESIA: "https://shopee.co.id"
VIETNAM: "https://shopee.com.vn"
PHILIPPINES: "https://shopee.ph"
BRAZIL: "http://shopee.com.br"
```
You can access `baseUrl` enum from `Shopee.BASE_URL`, for example:
```js
const Shopee = require("shopee-api");

const indonesianShopee = new Shopee(Shopee.BASE_URL.INDONESIA);
const singaporeanShopee = new Shopee(Shopee.BASE_URL.SINGAPORE);
const malaysianShopee = new Shopee(Shopee.BASE_URL.MALAYSIA);

```


#### `.search(parameters)`

Searches for products, it's async so it returns a `Promise` of products.

`parameters` is an object that can have following keys:

| Key | Description | Value |
|-|-|-|
| `verified` | Whether the store should be verified or not | integer (`1` \| `0`) |
| `mall` | Whether the store should be mall or not | integer (`1` \| `0`) |
| `orderBy` | How the search result will be ordered by | string (`"relevancy"` \| `"ctime"` \| `"sales"` \| `"price"` |
| `orderType` | How the search result will be ordered | string (`"desc"` \| `"asc"`) |
| `query` | Search keyword | string |
| `priceMin` | Minimum price of the search result | integer |
| `priceMax` | Maximum price of the search result | integer |
| `limit` | How many products to search | integer |
| `page` | Page duh | integer |
| `rating` | Minimum rating of the products, <br>for example if you pass `3` then it will show products with rating >= 3 | integer (`1-5`) |
| `shippings` | ID's of allowed shipping couriers. It's usually in order based on the shipping options on the search page starting from `1`.<br>So if you go to [shopee.my](https://shopee.com.my/search?keyword=test), you can look at the shipping options at the left of the page,<br>if you want to allow only J&T and DHL, pass `[2,4]` | integer[] |
| `locations` | Location name, it usually matches the location filter on the search page, e.g. `["Johor", "Penang"]` | string[] |

---
### Todo
- [ ] Improve typings in `Product` interface
- [ ] More test coverage
- [ ] Improve documentation
- [ ] Implement more API endpoint (such as: get product information, get shop information, etc.)