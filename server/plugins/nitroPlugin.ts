import { getRequestIP } from 'h3';
export default defineNitroPlugin(nitroApp => {

	nitroApp.hooks.hook('request', async (event) => {
		console.log('[Nitro/request]', [
            'IP',
            event.context.clientAddress,
            event.node.req.connection.remoteAddress,
            event.node.req.socket.remoteAddress,
            getRequestIP(event),
            getRequestIP(event, { xForwardedFor: true }),
        ]);
	});

    nitroApp.router.get('/test', defineEventHandler((event) => {
        return [
            'IP',
            event.context.clientAddress,
            event.node.req.connection.remoteAddress,
            event.node.req.socket.remoteAddress,
            getRequestIP(event),
            getRequestIP(event, { xForwardedFor: true }),
        ];
    }));
})