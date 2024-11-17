import { S3_BASE_URL, s3Client } from './s3-config';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export interface ImageKey {
  key: string;
  alt?: string;
  caption?: string;
}

export async function getSignedImageUrl(key: string, expiresIn = 3600): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
    Key: key,
  });

  try {
    return await getSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return getImageUrl(key);
  }
}

export function getImageUrl(key: string): string {
  // If the key is already a full URL, return it as is
  if (key.startsWith('http')) {
    return key;
  }
  
  // Remove leading slash if present
  const cleanKey = key.startsWith('/') ? key.slice(1) : key;
  return `${S3_BASE_URL}/${cleanKey}`;
}

export function getProjectImageUrl(projectId: string, imageKey: string): string {
  return getImageUrl(`projects/${projectId}/${imageKey}`);
}

export function parseImageKey(mdxImage: string): ImageKey {
  // Parse markdown image syntax: ![alt text](url "caption")
  const match = mdxImage.match(/!\[(.*?)\]\((.*?)(?:\s+"(.*?)")?\)/);
  if (!match) return { key: mdxImage };

  const [, alt, url, caption] = match;
  return {
    key: url,
    alt: alt || undefined,
    caption: caption || undefined
  };
}