import AWS from 'aws-sdk'

// Configure AWS SDK for Storj S3-compatible storage
const s3 = new AWS.S3({
  accessKeyId: process.env.STORJ_ACCESS_KEY,
  secretAccessKey: process.env.STORJ_SECRET_KEY,
  endpoint: process.env.STORJ_ENDPOINT || 'https://gateway.storjshare.io',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
})

export const uploadFile = async (file: File, key: string) => {
  const params = {
    Bucket: process.env.STORJ_BUCKET!,
    Key: key,
    Body: file,
    ContentType: file.type,
  }

  return s3.upload(params).promise()
}

export const deleteFile = async (key: string) => {
  const params = {
    Bucket: process.env.STORJ_BUCKET!,
    Key: key,
  }

  return s3.deleteObject(params).promise()
}

export const getFileUrl = (key: string) => {
  return s3.getSignedUrl('getObject', {
    Bucket: process.env.STORJ_BUCKET!,
    Key: key,
    Expires: 3600, // 1 hour
  })
}