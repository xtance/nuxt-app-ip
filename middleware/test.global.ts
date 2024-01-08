import { getRequestIP } from 'h3';

export default defineNuxtRouteMiddleware((to, from) => {
    const nuxt = useNuxtApp();
    const event = useRequestEvent(nuxt);
    console.log(
        'IP',
        event.context.clientAddress,
        event.node.req.connection.remoteAddress,
        event.node.req.socket.remoteAddress,
        getRequestIP(event),
        getRequestIP(event, { xForwardedFor: true }),
    );
})