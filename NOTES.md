## Auth Actions

one prefernce: put actions in an actions folder on the root

'use server' = should be run in a nodeJS environment. need this at top of file/page to use a server action

(auth) route folder is in () because we want /signup and /signin to share the (auth)/layout, but do not want 'auth' to be a route segment.
/signup, NOT /auth/signup

server action - executed on server, can call on the client

useFormState from react-dom

## cache and memoization

### useMemo

use useMemo() for caching an expensive computation in a Client Component across renders.

### cache()

use cache() in Server Components to memoize work that can be shared across components.
cache() is also recommended for memoizing data fetches, unlike useMemo() which should only be used for computations.

### memo()

You should use memo() to prevent a component re-rendering if its props are unchanged.
Compared to useMemo, memo() memoizes the component render based on props vs. specific computations. Similar to useMemo, the memoized component only caches the last render with the last prop values. Once the props change, the cache invalidates and the component re-renders.

### next js prod vs dev builds

build and start the next app to get a better simulation of what the cacheing behaviors will act like.

cache functions from react are only per request, there is no invalidation
we need a cache to persist across routes and need to invalidate and run again after a mutation,
unstable_cache (nextjs) tries to solve this, but is not working so hot right now

### nextjs-better-unstable-cache

npm package that works well for now..
uses react cache in combo with nextjs unstable_cache.
(if you don't memoize unstable_cache, it runs multiple times per request)

use this to cache non-request based functions that don't use cookies/headers
