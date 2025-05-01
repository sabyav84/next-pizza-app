module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/next-pizza-app' : '',
  images:{
    domains:["res.cloudinary.com"],
    unoptimized: true, // For static export
  }
}
