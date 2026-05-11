/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MortgageData {
  amount: number;
  years: number;
  interestRate: number;
}

export interface PrequalificationData {
  fullName: string;
  email: string;
  phone: string;
  income: string;
  requestedAmount: string;
  propertyValue: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}
