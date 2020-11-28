export default function resolveProductionUrl(document) {
  return `https://cocody.dev/posts/${document.slug.current}`;
}
