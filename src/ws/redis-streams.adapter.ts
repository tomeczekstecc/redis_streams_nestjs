import type { Server, ServerOptions } from 'socket.io';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-streams-adapter';
import { redis } from '../redis';

export class RedisStreamsAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): Server {
    const server = super.createIOServer(port, {
      ...options,
      connectionStateRecovery: {
        maxDisconnectDuration: 2 * 60 * 100,
      },
    }) as unknown as Server;

    server.adapter(
      createAdapter(redis, {
        streamName: 'readis_streams_test',
        maxLen: 20_000,
      }),
    );

    return server;
  }
}
