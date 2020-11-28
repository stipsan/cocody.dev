export default function resolveProductionUrl(document) {
  return `/api/preview?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}&slug=${document.slug.current}`
}
