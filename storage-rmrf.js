process.env.GOOGLE_APPLICATION_CREDENTIALS =
  '/home/gcoda/Private/981/9812/fly-vue/startorial/service-account.json'

const { Storage } = require('@google-cloud/storage')
const storage = new Storage()

// const glob = require('glob')
// const path = require('path')
const bucketName = 'static-pub'
const folder = process.argv[2]
const bucket = storage.bucket(bucketName)
bucket.getFiles({ prefix: folder }).then(([files]) => {
  files.forEach(async file => {
    const deleted = await file.delete()
    console.log({ deleted: !!deleted, file: file.name })
  })
})
