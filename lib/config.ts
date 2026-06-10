/**
 * Centralised front-end configuration.
 * Every value is driven by a NEXT_PUBLIC_ environment variable so forks only
 * need to set their .env on Vercel — no code changes required.
 */
export const config = {
  tokenName: process.env.NEXT_PUBLIC_TOKEN_NAME || "$SAFEMOON",
  tokenCA: process.env.NEXT_PUBLIC_TOKEN_CA || "12T8EnTgZzgpRyEvTUaxVprq7Ayxvfgq6wVXewuFpump",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  pumpFunUrl: process.env.NEXT_PUBLIC_PUMPFUN_URL || "https://pump.fun/coin/12T8EnTgZzgpRyEvTUaxVprq7Ayxvfgq6wVXewuFpump",
  tokenDescription:
    process.env.NEXT_PUBLIC_TOKEN_DESCRIPTION ||
    "100% of creator rewards used for automatic USDC buybacks via pump.fun Agent Mode. The true SafeMoon spirit — now stable on USDC.",
}
