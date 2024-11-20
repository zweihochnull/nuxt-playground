export const useComponentResolver = (components: {name: string; variation: string}[]) => {
  const asyncImports = {
    "breadcrumbs": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Breadcrumbs/Breadcrumbs.vue')
    ),
    "product-headline": () => defineAsyncComponent(() =>
      import('../components/Placeholders/ProductHeadline/ProductHeadline.vue')
    ),
    "product-details": () => defineAsyncComponent(() =>
      import('../components/Placeholders/ProductDetails/ProductDetails.vue')
    ),
    "product-gallery": () => defineAsyncComponent(() =>
      import('../components/Placeholders/ProductGallery/ProductGallery.vue')
    ),
    "product-variation-selection": () => defineAsyncComponent(() =>
      import('../components/Placeholders/ProductVariationSelection/ProductVariationSelection.vue')
    ),
    "buybox": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/Buybox.vue')
    ),
    "more-info": () => defineAsyncComponent(() =>
      import('../components/Placeholders/MoreInfo/MoreInfo.vue')
    ),
    "fancy-calculator": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/parts/FancyCalculator.vue')
    ),
    "big-price": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/parts/BigPrice.vue')
    ),
    "home-delivery": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/parts/HomeDelivery.vue')
    ),
    "reserve-collect": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/parts/ReCo.vue')
    ),
    "buy-button": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Buybox/parts/BuyButton.vue')
    ),
    "collapsable": () => defineAsyncComponent(() =>
      import('../components/Placeholders/Collapsable/Collapsable.vue')
    ),
      "product-overview": () => defineAsyncComponent(() =>
        import('../components/Placeholders/ProductOverview/ProductOverview.vue')
      ),
      "product-description": () => defineAsyncComponent(() =>
        import('../components/Placeholders/ProductDescription/ProductDescription.vue')
      ),
      "product-data": () => defineAsyncComponent(() =>
        import('../components/Placeholders/ProductData/ProductData.vue')
      ),
      "product-reviews": () => defineAsyncComponent(() =>
        import('../components/Placeholders/ProductReviews/ProductReviews.vue')
      ),
  }

  const result = {}

  for (const c of components) {
    //console.log(c)
    if (c.variation) {
      result[c.variation] = asyncImports[c.variation]()
    } else {
      result[c.name] = asyncImports[c.name]()
    }
  }

  //console.log(result)

  return result
}