import { Deployment } from 'config/projects'
import React from 'react'
import LinkButton from '@/components/LinkButton'
import SupportLinkButton from '../SupportLinkButton'
import PrivacyLinkButton from '../PrivacyLinkButton'

interface DeploymentListProps {
  deployment: Deployment
  app?: string
}

function ModernDeploymentList(props: DeploymentListProps): React.ReactElement {
  const { deployment, app } = props

  function renderList(type: string): React.ReactNode {
    const link = deployment[type]

    if (type == 'support') {
      return <SupportLinkButton link={link} />
    }

    if (type == 'privacy') {
      return <PrivacyLinkButton link={link} />
    }

    return <LinkButton kind={type} link={link} />
  }

  return (
    <div className="flex flex-wrap gap-2">
      {React.Children.toArray(Object.keys(deployment).map(renderList))}
    </div>
  )
}

export default ModernDeploymentList
