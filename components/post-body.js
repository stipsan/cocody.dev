import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <PortableText value={content} className={markdownStyles.markdown} />
    </div>
  )
}
