<script setup lang="ts">
import product from "../data/product.json"

// deliveryTime,
const firstSeller = product.sellers[0];
const [ price, fractionalPart ] = String(firstSeller.pricing.grossPrice).split(".")
const dataForBuyBox = {
  price: {
    price,
    fractionalPart
  },
  sellerName: firstSeller.sellerName,
  showBulkyDeliveryNote:  firstSeller.showBulkyDeliveryNote,
  eligibleForFreeDelivery:  firstSeller.eligibleForFreeDelivery, // free above 50eu
  deliveryEstimateDays: firstSeller.deliveryEstimateDays,
  deliveryOption: firstSeller.deliveryOption,
  reCoStore: 'OBI Markt Köln-Dellbrück',
  reCoDate: 'ab morgen 10:00 Uhr'
};
</script>

<template>
  <PlaceholdersBreadcrumbs />
  <PlaceholdersProductHeadline />
  <PlaceholdersProductDetails />
  <PlaceholdersBuybox />
  <PlaceholdersProductGallery />
  <PlaceholdersProductVariationSelection />
  <PlaceholdersAccordion />
  <PlaceholdersMoreInfo />
</template>

<style global>
.buybox {
  max-width: 460px;
}

.bg-orange {
  background-color: rgb(245 102 0)
}
</style>