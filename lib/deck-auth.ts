import { SignJWT, jwtVerify, type JWTPayload } from "jose"

// JWT payload structure for deck access tokens
export interface DeckTokenPayload extends JWTPayload {
  label: string // The recruiter/company label from Edge Config
}

// Get the secret key as Uint8Array for jose
function getSecretKey(): Uint8Array {
  const secret = process.env.DECK_JWT_SECRET
  if (!secret || secret.length < 32) {
    throw new Error(
      "[deck-auth] DECK_JWT_SECRET must be set and at least 32 characters"
    )
  }
  return new TextEncoder().encode(secret)
}

/**
 * Sign a deck access token with the given label
 * Token is session-only (no expiration) - valid until browser closes
 */
export async function signDeckToken(label: string): Promise<string> {
  const secret = getSecretKey()

  const token = await new SignJWT({ label })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("portfolio-deck")
    .sign(secret)

  return token
}

/**
 * Verify a deck access token and return the payload
 * Throws if token is invalid or tampered with
 */
export async function verifyDeckToken(
  token: string
): Promise<DeckTokenPayload> {
  const secret = getSecretKey()

  const { payload } = await jwtVerify(token, secret, {
    issuer: "portfolio-deck",
  })

  // Validate required fields
  if (!payload.label || typeof payload.label !== "string") {
    throw new Error("Invalid token payload: missing label")
  }

  return payload as DeckTokenPayload
}
