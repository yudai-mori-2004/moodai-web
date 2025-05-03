// components/sections/ProjectCard.tsx
import React from 'react';
import { Box, Typography, CardContent, Chip, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Card } from '../ui/Card';
import { Tag, TagList } from '../ui/Tag';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tags: string[];
    status?: 'coming-soon';
}

export function ProjectCard({ title, description, link, tags, status }: ProjectCardProps) {
    return (
        <Card>
            <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={600}
                        sx={{ color: 'text.primary' }}
                    >
                        {title}
                    </Typography>

                    {status === 'coming-soon' && (
                        <Chip
                            label="Coming Soon"
                            size="small"
                            sx={{
                                bgcolor: 'rgba(0, 0, 0, 0.05)',
                                color: 'text.secondary',
                                fontWeight: 500,
                                borderRadius: 1,
                            }}
                        />
                    )}
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '2.5rem' }}>
                    {description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <TagList>
                        {tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </TagList>
                </Box>

                <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Button
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="secondary"
                        endIcon={<OpenInNewIcon />}
                        sx={{
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                transform: 'translateX(4px)',
                            }
                        }}
                        disabled={status === 'coming-soon'}
                    >
                        {status === 'coming-soon' ? '詳細を見る（準備中）' : '詳細を見る'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}