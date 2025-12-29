import React from 'react'
import { Badge } from './ui/badge'

interface SectionBadgeProps {
    title: string
}

const SectionBadge = ({
    title
}: SectionBadgeProps) => {
    return (
        <Badge className="bg-blue-600/15 text-blue-600 rounded-md px-3 py-1 text-sm font-medium">{title}</Badge>
    )
}

export default SectionBadge
