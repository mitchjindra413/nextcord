# Base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm i

# Copy the rest of the application
COPY . .

# Expose the development port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]