import { ORDER_BY, ORDER_TYPE, SHIPPING } from "./constants";

export interface SearchParameters
    extends Record<string, string | string[] | number | number[] | boolean> {
    verified: 1 | 0;
    mall: 1 | 0;
    orderType: typeof ORDER_TYPE[keyof typeof ORDER_TYPE];
    orderBy: typeof ORDER_BY[keyof typeof ORDER_BY];
    query: string;
    priceMin: number;
    priceMax: number;
    limit: number;
    page: number;
    rating: number;
    shippings: number[];
    locations: string[];
    pageType: "search";
}

// TODO: Need more info for `any` type
export interface Product {
    itemid: number;
    welcomePackageInfo?: any;
    liked: boolean;
    recommendationInfo?: any;
    bundleDealInfo?: {
        bundleDealId: number;
        bundleDealLabel: string;
    };
    priceMaxBeforeDiscount: number;
    trackingInfo: {
        multiSearchTracking?: number[];
        viralSpuTracking: any;
        businessTracking: any;
        ruleid?: number[];
        groupid: number;
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
    videoInfoList: {
        videoId: string;
        version: number;
        formats: any[];
        duration: number;
        defaultFormat: any;
        thumbUrl: string;
    }[];
    adsKeyword?: string;
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
    jsonData?: string;
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
    deductionInfo?: string;
    stock: number;
    status: number;
    priceMax: number;
    addOnDealInfo?: {
        addOnDealId: number;
        addOnDealLabel: string;
        subType: number;
    };
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
    tierVariations: {
        images: string[];
        properties: any[];
        type?: number;
        name: string;
        options: string[];
    }[];
    isAdult: boolean;
    discount?: string; // string of number, fyi.
    flag: number;
    isNonCcInstallmentPaymentEligible: boolean;
    hasLowestPriceGuarantee: boolean;
    hasGroupBuyStock?: any;
    matchType?: number;
    previewInfo?: any;
    welcomePackageType: number;
    exclusivePriceInfo?: any;
    name: string;
    distance?: any;
    adsid?: number;
    ctime: number;
    wholesaleTierList: {
        minCount: number;
        price: number;
        maxCount?: number;
    }[];
    showShopeeVerifiedLabel: boolean;
    campaignid?: number;
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
