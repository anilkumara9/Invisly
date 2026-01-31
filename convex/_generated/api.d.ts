/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as clerkWebhook from "../clerkWebhook.js";
import type * as crons from "../crons.js";
import type * as desktopAuth from "../desktopAuth.js";
import type * as emails from "../emails.js";
import type * as http from "../http.js";
import type * as lib_stripe from "../lib/stripe.js";
import type * as payments from "../payments.js";
import type * as stripe from "../stripe.js";
import type * as stripeActions from "../stripeActions.js";
import type * as stripeInternalActions from "../stripeInternalActions.js";
import type * as stripeWebhook from "../stripeWebhook.js";
import type * as test_emails from "../test_emails.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  clerkWebhook: typeof clerkWebhook;
  crons: typeof crons;
  desktopAuth: typeof desktopAuth;
  emails: typeof emails;
  http: typeof http;
  "lib/stripe": typeof lib_stripe;
  payments: typeof payments;
  stripe: typeof stripe;
  stripeActions: typeof stripeActions;
  stripeInternalActions: typeof stripeInternalActions;
  stripeWebhook: typeof stripeWebhook;
  test_emails: typeof test_emails;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
