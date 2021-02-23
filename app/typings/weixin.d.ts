/**
 * 微信机器人响应定义
 */
interface Headers {
    server: string;
    date: string;
    "content-type": string;
    "content-length": string;
    connection: string;
    "error-code": string;
    "error-msg": string;
}

interface Res {
    status: number;
    statusCode: number;
    statusMessage: string;
    headers: Headers;
    size: number;
    aborted: boolean;
    rt: number;
    keepAliveSocket: boolean;
    data: object;
    requestUrls: string[];
    timing?: any;
    remoteAddress: string;
    remotePort: number;
    socketHandledRequests: number;
    socketHandledResponses: number;
}

interface RootObject {
    data: object;
    status: number;
    headers: Headers;
    res: Res;
}
