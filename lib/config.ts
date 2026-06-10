/**
 * Centralised front-end configuration.
 * Every value is driven by a NEXT_PUBLIC_ environment variable so forks only
 * need to set their .env on Vercel — no code changes required.
 */
export const config = {
  tokenName: process.env.NEXT_PUBLIC_TOKEN_NAME || "$SAFEMOON",
  tokenCA: process.env.NEXT_PUBLIC_TOKEN_CA || "",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  tokenDescription:
    process.env.NEXT_PUBLIC_TOKEN_DESCRIPTION ||
    "The first Solana token that automatically distributes USDC rewards to holders. Hold $SAFEMOON, earn real dollars.",
}
