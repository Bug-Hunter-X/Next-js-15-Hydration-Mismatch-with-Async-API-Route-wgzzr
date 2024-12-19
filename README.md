# Next.js 15 Hydration Mismatch with Async API Route

This repository demonstrates a common hydration mismatch issue in Next.js 15 applications involving asynchronous API routes and client-side data fetching.  The problem arises when the initial server-side render (SSR) data differs from the data fetched on the client-side, leading to a hydration mismatch error.

## Problem Description

The `pages/api/data.js` file defines an API route that simulates an asynchronous operation. The `pages/index.js` component fetches data from this API route using `fetch`. The timing of the data fetching can lead to inconsistencies between the SSR data and the client-side data.  The client-side data might not be available during the hydration phase, causing the mismatch.

## Solution

The solution is to ensure that the client-side data fetching is complete before the hydration process begins.  In some cases, this might involve using a loading indicator and delaying hydration until data is available.  This example shows a simple approach to handling asynchronous data fetching gracefully, avoiding hydration mismatches.

## How to Reproduce

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm run dev`
5. Observe the initial render and the subsequent hydration.

## Note

While this example demonstrates the problem and a solution, other strategies exist for handling asynchronous data fetching in Next.js 15, including using `getServerSideProps` for data fetching and handling loading states effectively.