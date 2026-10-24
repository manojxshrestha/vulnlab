
// Main application entry point
const API_BASE = '/api/v1';
const GRAPHQL_ENDPOINT = '/graphql';
const WS_ENDPOINT = 'wss://ws.testcorp.local/ws';

const API_ENDPOINTS = {
    users: '/api/v1/users',
    auth: '/api/v1/auth/login',
    logout: '/api/v1/auth/logout',
    profile: '/api/v1/profile',
    settings: '/api/v1/settings',
    admin: '/api/v1/admin/users',
    internal: '/api/v1/internal/debug',
    health: '/api/v1/health',
    metrics: '/api/v1/metrics',
    export: '/api/v1/export/data',
    upload: '/api/v1/upload',
    search: '/api/v1/search',
    notifications: '/api/v1/notifications',
    webhooks: '/api/v1/webhooks',
    secrets: '/api/v1/secrets',
    config: '/api/v1/config',
    version: '/api/v1/version',
    debug: '/api/v1/debug',
    admin_panel: '/admin/panel',
    user_management: '/admin/users',
    logs: '/api/v1/logs',
    audit: '/api/v1/audit',
    backup: '/api/v1/backup',
    import: '/api/v1/import',
    export: '/api/v1/export',
    webhooks_test: '/api/v1/webhooks/test',
};

const GRAPHQL_QUERIES = {
    GET_USER: `
        query GetUser($id: ID!) {
            user(id: $id) {
                id
                email
                password
                apiKey
                secretToken
                roles
            }
        }
    `,
    GET_ALL_USERS: `
        query GetAllUsers {
            users {
                id
                email
                password
                apiKey
                roles
            }
        }
    `,
    ADMIN_STATS: `
        query AdminStats {
            stats {
                totalUsers
                apiKeys
                secretTokens
            }
        }
    `
};

const WS_EVENTS = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    MESSAGE: 'message',
    NOTIFICATION: 'notification',
    AUTH: 'auth',
    ERROR: 'error',
};

const SECRETS = {
    API_KEY: 'sk_live_FAKE_TEST_KEY',
    JWT_SECRET: 'super-secret-jwt-key-change-in-production',
    ENCRYPTION_KEY: '32-byte-encryption-key-here!!',
    DATABASE_URL: 'postgresql://admin:supersecret@localhost:5432/prod',
    REDIS_URL: 'redis://:redispass@localhost:6379',
    AWS_ACCESS_KEY: 'AKIA_FAKE_TEST_KEY',
    AWS_SECRET_KEY: 'FAKE_AWS_SECRET_KEY',
    STRIPE_SECRET: 'sk_live_FAKE_STRIPE_KEY',
    SENDGRID_KEY: 'SG.FAKE_SENDGRID_KEY',
    SLACK_WEBHOOK: 'https://hooks.slack.com/services/FAKE/TEST/WEBHOOK',
    GITHUB_TOKEN: 'ghp_FAKE_GITHUB_TOKEN',
    SENTRY_DSN: 'https://FAKE@sentry.io/123456',
};

console.log('Main.js loaded');
export { API_ENDPOINTS, GRAPHQL_QUERIES, WS_EVENTS, SECRETS };
