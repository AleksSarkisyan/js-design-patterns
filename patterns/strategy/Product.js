import { getProductPriceByPromoType } from './ProductPrice.js'

export default class Product {
    getPrice(originalPrice, promoType = 'default') {
        return getProductPriceByPromoType(originalPrice, promoType);
    }
}