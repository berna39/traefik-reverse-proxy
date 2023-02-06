## Traefik Reverse proxy

Traefik is a leading reverse proxy and load balancer for cloud-native operations and containerized workloads. It functions as an edge router that publishes your services to the internet.

Traefik routes requests to containers by matching request attributes such as the domain, URL, and port. The proxy incorporates automatic service discovery so you can add new containers in real-time, without restarting the Traefik service.

In this repo, I'll put together a simple Traefik v2 deployment that will publish multiple Docker containers. This lets me use one Docker installation to provide several services over the same port.