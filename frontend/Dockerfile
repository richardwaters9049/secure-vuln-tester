# Use official Node.js image for building the frontend
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the project
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a static file server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
