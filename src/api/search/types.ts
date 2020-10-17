import { ORDER_BY, ORDER_TYPE, SHIPPING } from "./constants";

export interface SearchParameters extends Record<string, string | string[] | number | number[] | boolean> {
    verified: 1 | 0;
    mall: 1 | 0;
    orderType: typeof ORDER_TYPE[keyof typeof ORDER_TYPE];
    orderBy: typeof ORDER_BY[keyof typeof ORDER_BY]
    query: string;
    priceMin: number;
    priceMax: number;
    limit: number;
    page: number;
    rating: number;
    shippings: number[];
    locations: string[];
    pageType: "search"
}

// TODO: Need more info for `any` type
export interface Product {
    itemid: number;
    welcomePackageInfo?: any;
    liked: boolean;
    recommendationInfo?: any;
    bundleDealInfo?: any;
    priceMaxBeforeDiscount: number;
    trackingInfo: {
        multiSearchTracking: number[];
        viralSpuTracking?: any;
        businessTracking?: any;
    };
    image: string;
    recommendationAlgorithm?: any;
    isCcInstallmentPaymentEligible: boolean;
    shopid: number;
    canUseWholesale: boolean;
    groupBuyInfo?: any;
    referenceItemId: string;
    currency: string;
    rawDiscount: number;
    showFreeShipping: boolean;
    videoInfoList: any[];
    adsKeyword?: any;
    collectionId?: any;
    images: string[];
    isPreferredPlusSeller: boolean;
    priceBeforeDiscount: number;
    isCategoryFailed: boolean;
    showDiscount: number;
    cmtCount: number;
    viewCount: number;
    displayName?: any;
    catid: number;
    jsonData?: any;
    upcomingFlashSale?: any;
    isOfficialShop: boolean;
    brand: string;
    priceMin: number;
    likedCount: number;
    canUseBundleDeal: boolean;
    showOfficialShopLabel: boolean;
    coinEarnLabel?: any;
    priceMinBeforeDiscount: number;
    cbOption: number;
    sold: number;
    deductionInfo?: any;
    stock: number;
    status: number;
    priceMax: number;
    addOnDealInfo?: any;
    isGroupBuyItem?: any;
    flashSale?: any;
    price: number;
    shopLocation: string;
    itemRating: {
        ratingStar: number;
        ratingCount: number[];
        rcountWithImage: number;
        rcountWithContext: number;
    };
    showOfficialShopLabelInTitle: boolean;
    tierVariations: any[];
    isAdult: boolean;
    discount?: any;
    flag: number;
    isNonCcInstallmentPaymentEligible: boolean;
    hasLowestPriceGuarantee: boolean;
    hasGroupBuyStock?: any;
    matchType?: any;
    previewInfo?: any;
    welcomePackageType: number;
    exclusivePriceInfo?: any;
    name: string;
    distance?: any;
    adsid?: any;
    ctime: number;
    wholesaleTierList: any[];
    showShopeeVerifiedLabel: boolean;
    campaignid?: any;
    showOfficialShopLabelInNormalPosition?: any;
    itemStatus: string;
    shopeeVerified: boolean;
    hiddenPriceDisplay?: any;
    sizeChart?: any;
    itemType: number;
    shippingIconType?: any;
    campaignStock?: any;
    labelIds: number[];
    serviceByShopeeFlag: number;
    badgeIconType: number;
    historicalSold: number;
    transparentBackgroundImage: string;
}