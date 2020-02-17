# Create a development image
FROM node:12-alpine as deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

# Create final image from deps
FROM node:12-alpine
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules/
COPY ./src/ ./src
COPY ./schema ./schema

CMD ["yarn", "server"]
EXPOSE 8000
