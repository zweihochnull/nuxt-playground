# Have PDP-Renderer
It renders the correct Components and their Layout Option

```typescript
const config = {
  name: 'pdp',
  variation: 'default', // mini-pdp
  layout: `
    breadcrumbs ""
    gallery     buybox
    details     buybox
  `,
  components: [
    {
      name: 'buyBox',
      variation: 'default', // mini-buybox
      layout: `
        price-calculator  main-price
        delivery-options  delivery-options
        buy-btn           buy-btn
      `,
      components: [
        {
          name: 'price-calculator',
          variation: 'default'
        },
        {
          name: 'main-price',
          variation: 'default'
        },
        {
          name: 'delivery-options',
          variation: 'default'
          layout: `
            home-delivery
            reCo
          `,
          components: [
            {
              name: 'home-delivery',
              variation: 'default'
            },
            {
              name: 'reCo',
              variation: 'default'
            },
          ]
        },
        {
          name: 'buy-btn',
          variation: 'default'
        },
      ]
    }
  ]
}



```

<PdpRenderer :config="config" />

## Have Component-Renderers like BuyBox-Renderer
It renders specific Component Options, like layout of content variation

## Different Pdps based on
google-entry
specific categories
specific brands
user profile
a/b tests
promotions

maybe combinations of 2 or more


## Segment the layout on different levels
Main pdp 2-column layout maybe just:
top     top
main    side
bottom  bottom


## Main Layout Segments example
```js
const pdp = {
  layout: 'default',
  segments: {
    top: {
      components: [
        {
          name: 'breadcrumbs',
          variation: 'default'
        }
      ]
    },
    main: {
      components: [
        {
          name: 'product-headline',
          variation: 'default'
        },
        {
          name: 'product-details',
          variation: 'default'
        },
        {
          name: 'product-gallery',
          variation: 'default'
        },
        {
          name: 'product-variation-selection',
          variation: 'default'
        },
        {
          name: 'collapsable',
          variation: 'product-overview'
        },
        {
          name: 'collapsable',
          variation: 'product-description'
        },
        {
          name: 'collapsable',
          variation: 'product-data'
        },
        {
          name: 'collapsable',
          variation: 'product-reviews'
        },
      ]
    },
    side: {
      components: [
        {
          name: 'buybox',
          variation: 'default'
        }
      ]
    },
    bottom: {
      components: [
        {
          name: 'more-info',
          variation: 'sticky-nav'
        }
      ]
    }
  }
}
```