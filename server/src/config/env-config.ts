import { getEnv } from "../utils/get-env";

export const Env = {
    NODE_ENV: getEnv('NODE_ENV', 'development'),
    PORT: getEnv('PORT', '3000'),
    MONGODB_URI: getEnv("MONGODB_URI", ""),
    JWT_SECRET: getEnv("JWT_SECRET", "4d9f7ab3e8c14bcfc43edbbacb0c7ceff91aa18d11744b85cd0552e2bf51e43d"),
    JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),
    FRONTEND_URL: getEnv("FRONTEND_URL", "http://localhost:3000")

} as const;