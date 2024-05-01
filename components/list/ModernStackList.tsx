import { Stack, StackInfo } from 'config/stack'
import React, { useCallback } from 'react'
import IconCard from '../IconCard'

interface StackListProps {
  stack: Stack[]
}

function ModernStackList(props: StackListProps): React.ReactElement {
  const { stack } = props
  const className = `flex flex-wrap gap-4 justify-start`

  const renderList = useCallback((stack) => {
    const { value, kind } = StackInfo[stack]

    return <IconCard title={value} kind={kind} />
  }, [])

  return <div className={className}>{React.Children.toArray(stack.map(renderList))}</div>
}

export default ModernStackList
