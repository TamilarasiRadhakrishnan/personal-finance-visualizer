import path from "path";

// Use import.meta.url to get the directory name in ES modules
export default {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(new URL('.', import.meta.url).pathname, 'src'), // Adjust to your 'src' directory
    };
    return config;
  },
};
