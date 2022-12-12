import {Platform} from 'react-native';

const isAmazon = false;

const productSkus = Platform.select({
  ios: ['consumable01', 'nonconsumable01'],

  android: ['consumable01'],

  default: [],
}) as string[];

const subscriptionSkus = Platform.select({
  ios: ['subscription01', 'subscription02', 'Gasoline', 'Diesel', 'Alcohol'],
  android: isAmazon
    ? [
        'com.amazon.sample.iap.subscription.mymagazine.month',
        'com.amazon.sample.iap.subscription.mymagazine.quarter',
      ]
    : ['gasoline', 'alcohol', 'diesel', 'newproduct'],
  default: [],
}) as string[];
const amazonBaseSku = 'com.amazon.sample.iap.subscription.mymagazine';
export const constants = {
  productSkus,
  subscriptionSkus,
  amazonBaseSku,
};

export const appAccountToken = 'd4e3b9f0-01f3-42ba-8692-c0b2e7144c05';
