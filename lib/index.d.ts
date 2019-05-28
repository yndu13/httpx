import { IncomingMessage, Agent, OutgoingHttpHeaders } from "http";

export interface Options {
    'method'?: string;
    'headers'?: {[key: string]: string};
    'readTimeout'?: number;
    'connectTimeout'?: number;
    'timeout'?: number;
    'agent'?: Agent;
    'headers'?: OutgoingHttpHeaders;
    'rejectUnauthorized'?: boolean;
    'compression'?: boolean;
    'beforeRequest'?(options: Options): void;
    'data'?: string|Buffer|undefined;
}

export function request<T>(url: string, options: Options): Promise<IncomingMessage>;

export function read(response: IncomingMessage, encoding: string): Promise<string|Buffer>;