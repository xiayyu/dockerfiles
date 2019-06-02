FROM node:carbon-alpine

# Install build-deps and download src
RUN apk --update --no-cache --virtual add build-base python2 git && \
    mkdir /flood /rtorrent && \
    git clone https://github.com/xiayyu/flood.git /flood && \
    rm -rf /flood/.git

# Set workdir
WORKDIR /flood

# Copy docker configuration file. This allows for specifying common configs with
# just environment variables.
COPY config.js /flood/config.js

# Install Dependencies and remove cache to keep image small. This is done in one
# step to keep the cache out of intermediate image.
RUN npm install \
    && npm cache clean --force \
    && npm run build

# Hints for consumers of the container.
EXPOSE 3000
VOLUME ["/rtorrent"]

# Start application.
CMD [ "npm", "start" ]
