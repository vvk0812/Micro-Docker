FROM node:16-alpine
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]

# FROM node:16-alpine
# WORKDIR /login
# COPY . /login
# RUN npm install
# EXPOSE 50
# CMD ["npm", "start"]