const localhostUrl = "http://localhost:3000"

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL

  if (!siteUrl) {
    return localhostUrl
  }

  return siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`
}
