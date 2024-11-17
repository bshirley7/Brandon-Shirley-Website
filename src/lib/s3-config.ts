import { S3Client } from '@aws-sdk/client-s3';

// S3 Configuration
export const S3_BUCKET_NAME = 'website-brandonshirley';
export const S3_REGION = 'us-east-2';
export const S3_BASE_URL = `https://${S3_BUCKET_NAME}.s3.${S3_REGION}.amazonaws.com`;

// Initialize S3 client with IAM credentials
export const s3Client = new S3Client({
  region: S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || ''
  }
});

// CORS configuration for the S3 bucket
export const corsConfiguration = {
  CORSRules: [
    {
      AllowedHeaders: ['*'],
      AllowedMethods: ['GET'],
      AllowedOrigins: [
        'http://localhost:5173', // Development
        'https://brandonshirley.com', // Production
      ],
      ExposeHeaders: ['ETag'],
      MaxAgeSeconds: 3600,
    },
  ],
};