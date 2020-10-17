import Shopee from "../dist/Shopee";

const shopee = new Shopee();

test("search", async function() {
	const products = await shopee.search({
		query: "RTX 2080"
	});
	expect(products.length).toBeGreaterThanOrEqual(50);
});