process.env.GOOGLE_APPLICATION_CREDENTIALS =
  '/home/gcoda/Private/981/9812/fly-vue/startorial/service-account.json'

const { Storage } = require('@google-cloud/storage')
const storage = new Storage()

const glob = require('glob')
const path = require('path')
const bucketName = 'static-pub'
const localPath = process.argv[2] || 'dist' 
const folder = process.argv[3] || 'deployed'
const bucket = storage.bucket(bucketName)
// options is optional
glob('**/*.*', { cwd: localPath }, async (err, files) => {
  if (!err) {
    console.log(files)
    for (const filePath of files) {
      const destination = path.join(folder, filePath)
      const result = await bucket.upload(
        path.resolve(localPath, filePath),
        {
          destination,
          gzip: true,
          metadata: {
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
          },
        }
      )
      console.log({ destination }, { result })
    }
  }
})
