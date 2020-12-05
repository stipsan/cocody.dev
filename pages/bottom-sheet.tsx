import { useCallback, useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

// For now just a test page, will be a blog post later

export default function BottomSheetPage() {
  const [open, setOpen] = useState(false)
  const onDismiss = useCallback(() => setOpen(false), [])

  return (
    <div className="grid place-content-evenly min-h-screen bg-white">
      <button
        onClick={() => setOpen(true)}
        className="text-xl px-7 py-3 rounded-2xl border-solid border-gray-300 border-2 transition-colors duration-150 bg-gray-100 text-gray-900 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300"
      >
        Open
      </button>
      <BottomSheet open={open} onDismiss={onDismiss}>
        <div>Hello</div>
      </BottomSheet>
    </div>
  )
}
