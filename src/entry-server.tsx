import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { routes } from "./app/routes";

export { indexablePaths, pageSeo, schemaGraph } from "./components/shared/SEO";

// Build-time prerender used by scripts/generate-seo-pages.mjs. The output is
// the same markup the browser renders, so crawlers that do not run JavaScript
// (most AI crawlers) still receive the full page content.
export async function render(pathname: string) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`https://netsunlimited.com${pathname}`));
  if (context instanceof Response) throw new Error(`Unexpected response while prerendering ${pathname}`);
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
