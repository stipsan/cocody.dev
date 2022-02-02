export default function resolveProductionUrl(document) {
  return `/api/preview?secret=${process.env.SANITY_PREVIEW_SECRET}&slug=${document.slug.current}`
}
