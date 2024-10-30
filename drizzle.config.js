/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/Schema.jsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://aicourse_owner:7k2zdWgVsKEI@ep-rough-salad-a87u1vow.eastus2.azure.neon.tech/aicourse?sslmode=require"
    
  }
};