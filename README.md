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
const shopee = require("shopee");

async function run() {
    const response = await shopee.search({
        query: "RTX 2080",
        orderBy: shopee.ORDER_BY.PRICE,
        orderType: shopee.ORDER_TYPE.ASC,
        shippings: [
            shopee.SHIPPING.JNE_REGULAR,
            shopee.SHIPPING.SI_CEPAT_REG
        ],
        locations: ["Jawa Barat", "Jabodetabek"],
        priceMax: 30000000
    });
    console.log(response[0]);
}

run();
```
Output example:
```js
{
  itemid: 7938832916,
  welcomePackageInfo: null,
  liked: false,
  recommendationInfo: null,
  bundleDealInfo: null,
  priceMaxBeforeDiscount: -1,
  trackingInfo: {
    multiSearchTracking: [ 0 ],
    viralSpuTracking: null,
    businessTracking: null
  },
  image: 'e6bed1bfed0133eb5823fbc3042bf828',     
  recommendationAlgorithm: null,
  isCcInstallmentPaymentEligible: false,
  shopid: 238466450,
  canUseWholesale: false,
  groupBuyInfo: null,
  referenceItemId: '',
  currency: 'IDR',
  rawDiscount: 0,
  showFreeShipping: false,
  videoInfoList: [],
  adsKeyword: null,
  collectionId: null,
  images: [ 'e6bed1bfed0133eb5823fbc3042bf828' ],
  isPreferredPlusSeller: false,
  priceBeforeDiscount: 0,
  isCategoryFailed: false,
  showDiscount: 0,
  cmtCount: 0,
  viewCount: 9,
  displayName: null,
  catid: 134,
  jsonData: null,
  upcomingFlashSale: null,
  isOfficialShop: false,
  brand: 'MSI',
  priceMin: 2562000000000,
  likedCount: 1,
  canUseBundleDeal: false,
  showOfficialShopLabel: false,
  coinEarnLabel: null,
  priceMinBeforeDiscount: -1,
  cbOption: 0,
  sold: 0,
  deductionInfo: null,
  stock: 5,
  status: 1,
  priceMax: 2562000000000,
  addOnDealInfo: null,
  isGroupBuyItem: null,
  flashSale: null,
  price: 2562000000000,
  shopLocation: 'KOTA BANDUNG',
  itemRating: {
    ratingStar: 0,
    ratingCount: [ 0, 0, 0, 0, 0, 0 ],
    rcountWithImage: 0,
    rcountWithContext: 0
  },
  showOfficialShopLabelInTitle: false,
  tierVariations: [],
  isAdult: false,
  discount: null,
  flag: 0,
  isNonCcInstallmentPaymentEligible: false,      
  hasLowestPriceGuarantee: false,
  hasGroupBuyStock: null,
  matchType: null,
  previewInfo: null,
  welcomePackageType: 0,
  exclusivePriceInfo: null,
  name: 'MSI RTX 2080 Ti Gaming X Trio',
  distance: null,
  adsid: null,
  ctime: 1592632842,
  wholesaleTierList: [],
  showShopeeVerifiedLabel: false,
  campaignid: null,
  showOfficialShopLabelInNormalPosition: null,
  itemStatus: 'normal',
  shopeeVerified: false,
  hiddenPriceDisplay: null,
  sizeChart: null,
  itemType: 0,
  shippingIconType: null,
  campaignStock: null,
  labelIds: [ 1000031 ],
  serviceByShopeeFlag: 0,
  badgeIconType: 0,
  historicalSold: 0,
  transparentBackgroundImage: ''
}
```

---
### Todo
- [ ] Improve typings in `Product` interface
- [ ] More test coverage
- [ ] Improve documentation
- [ ] Implement more API endpoint (such as: get product information, get shop information, etc.)