import React from 'react'
import { Badge } from './ui/badge'

interface SectionBadgeProps {
    title: string
}

const SectionBadge = ({
    title
}: SectionBadgeProps) => {
    return (
        <Badge className="bg-blue-100 text-blue-600 rounded-md text-sm font-medium">{title}</Badge>
    )
}

export default SectionBadge
