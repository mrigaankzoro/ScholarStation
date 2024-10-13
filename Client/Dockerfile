# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Vite development server runs on (default: 5173)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
