import type { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout — Claire Does Perfumes',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
