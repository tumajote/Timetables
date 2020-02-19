FROM node:12.2.0-alpine

COPY package.json package.json
RUN npm install
COPY . . 
RUN npm run build

FROM node:12.2.0-alpine
RUN mkdir -p build
COPY --from=0 ./build ./build 
RUN npm install -g serve 
CMD serve -p $PORT -s build