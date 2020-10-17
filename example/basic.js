const Shopee = require("shopee-api");

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