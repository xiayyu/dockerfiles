FROM alpine:edge
LABEL maintainer="xiayyu"
## Prepare ##
RUN apk --update --no-cache add rtorrent && \
    mkdir /rtorrent
COPY rtorrent.rc /root/.rtorrent.rc
# Port 50000 is opening incoming connections from other peers.
EXPOSE 50000
EXPOSE 5000
# The base volume should be mount to host.
VOLUME ["/rtorrent"]
#ENTRYPOINT
CMD ["rtorrent"]
