# Use a base image of Node.js
FROM node:16.6.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all additional files and directories to the container's working directory
COPY features/basic.feature .
COPY pages/homePage.js .
COPY step_definitions/steps.js .
COPY test/search_test.js .
COPY codecept.conf.js .
COPY jsconfig.json .
COPY steps_file.js .

# Command to run the automated tests
CMD ["npx", "codeceptjs", "run", "--features", "--steps"]
