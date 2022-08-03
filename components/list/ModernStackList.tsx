import { Stack, StackInfo } from 'config/stack'
import React, { useCallback } from 'react'
import IconCard from '../IconCard'

interface StackListProps {
  stack: Stack[]
  justify: string
}

function ModernStackList(props: StackListProps): React.ReactElement {
  const { stack, justify } = props
  const className =
    justify == 'around'
      ? `flex flex-wrap gap-2 justify-around`
      : `flex flex-wrap gap-2 justify-start`

  const renderList = useCallback((stack) => {
    const { value, kind } = StackInfo[stack]

    return <IconCard title={value} kind={kind} />
  }, [])

  return <div className={className}>{React.Children.toArray(stack.map(renderList))}</div>
}

export default ModernStackList
