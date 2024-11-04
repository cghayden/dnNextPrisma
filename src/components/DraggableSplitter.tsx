import { cn } from '@nextui-org/react'
import { useState } from 'react'

interface DraggableSplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  dir?: string | undefined
  isDragging: boolean
  // [key: string]: any; // For any additional props
}

const DraggableSplitter = ({
  id,
  dir,
  isDragging,
  ...props
}: DraggableSplitterProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      id={id}
      data-testid={id}
      tabIndex={0}
      className={cn(
        'drag-bar',
        dir === 'horizontal' && 'drag-bar--horizontal',
        (isDragging || isFocused) && 'drag-bar--dragging'
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}

export default DraggableSplitter
