/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FIRE_BASE_APIKEY: process.env.FIRE_BASE_APIKEY,
        FIRE_BASE_AUTHDOMAIN:process.env.FIRE_BASE_AUTHDOMAIN,
        FIRE_BASE_PROJECTID:process.env.FIRE_BASE_PROJECTID,
        FIRE_BASE_STORAGEBUCKET:process.env.FIRE_BASE_STORAGEBUCKET,
        FIRE_BASE_MESSAGINGSENDERID:process.env.FIRE_BASE_MESSAGINGSENDERID,
        FIRE_BASE_APPID:process.env.FIRE_BASE_APPID,
        FIRE_BASE_MEASUREMENTID:process.env.FIRE_BASE_MEASUREMENTID
    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
}

module.exports = nextConfig
