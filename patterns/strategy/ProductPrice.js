function getPreSalePrice(origialPrice) {
    return origialPrice * 0.8;
}
function getPromoPrice(origialPrice) {
    if (origialPrice <= 100) {
        return origialPrice * 0.9;
    }

    return origialPrice - 20;
}
function getBlackFridayPrice(origialPrice) {
    if (origialPrice >= 100 && origialPrice < 200) {
        return origialPrice - 20;
    }

    if (origialPrice >= 200) {
        return origialPrice - 50;
    }

    return origialPrice * 0.8;
}
function getDefaultPrice(origialPrice) {
    return origialPrice;
}

export const getProductPriceByPromoType = (origialPrice, promoType) => {
    const priceStrategies = {
        "pre-sale": getPreSalePrice(origialPrice),
        promotion: getPromoPrice(origialPrice),
        "black-friday": getBlackFridayPrice(origialPrice),
        default: getDefaultPrice(origialPrice),
    };

    if (!priceStrategies[promoType]) {
        return;
    }

    return priceStrategies[promoType]
}