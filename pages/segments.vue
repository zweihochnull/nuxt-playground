<script setup lang="ts">
import type { ComponentInfo, Config } from '~/types/global';

const pdp = {
  // name: page
  // variation: maybe layout
  layout: 'pdp',
  segments: {
    top: {
      components: [
        {
          name: 'breadcrumbs',
          // variation: 'variation-a'
        }
      ]
    },
    main: {
      components: [

        {
          name: 'product-headline',
          // variation: 'default'
        },
        {
          name: 'product-details',
          // variation: 'default'
        },
        {
          name: 'product-gallery',
          // variation: 'default'
        },
        {
          name: 'product-variation-selection',
          // variation: 'default'
        },
        {
          name: 'collapsable',
          variation: 'product-overview'
        },
        
        {
          name: 'collapsable',
          variation: 'product-description'
        },/*
        {
          name: 'collapsable',
          variation: 'product-data'
        },
        {
          name: 'collapsable',
          variation: 'product-reviews'
        },*/
      ]
    },
    side: {
      components: [
        /*{
          name: 'buybox',
          variation: 'default'
        },*/
        /*
        {
          name: 'buybox',
          // variation: 'default',
          layout: 'buybox',
          segments: {
            calculator: {
              components: [
                {
                  name: 'fancy-calculator',
                  // variation: 'default'
                }
              ]
            },
            price: {
              components: [
                {
                  name: 'big-price',
                  // variation: 'default'
                }
              ]
            },
            delivery: {
              components: [
                {
                  name: 'home-delivery',
                  // variation: 'default'
                },
                {
                  name: 'reserve-collect',
                  // variation: 'default'
                }
              ]
            },
            buy: {
              components: [
                {
                  name: 'buy-button',
                  // variation: 'default'
                }
              ]
            }
          }
        }*/
      ]
    },
    bottom: {
      components: [
        /*
        {
          name: 'more-info',
          // variation: 'default' //'sticky-nav'
        }
        */
      ]
    }
  }
} as Config
</script>

<template>
  <Renderer :config="pdp" />
</template>