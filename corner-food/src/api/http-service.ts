import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosError } from 'axios';

import { apiInstance } from './api-instance';

export class HttpService {
    static get<Response, Params = void>(url: string, params?: Params): Promise<Response> {
        return HttpService._makeRequest(() => apiInstance.get(url, { params }));
    }

    static post<Response, Body extends Record<keyof Body, unknown> = object>(
        url: string,
        body?: Body,
        params?: AxiosRequestConfig['params'],
    ): Promise<AxiosResponse<Response, Body>['data']> {
        return HttpService._makeRequest(() => apiInstance.post(url, body, { params }));
    }

    static patch<Response, Body = void, Params = void>(url: string, body?: Body, params?: Params): Promise<Response> {
        return HttpService._makeRequest(() => apiInstance.patch(url, body, { params }));
    }

    static put<Response, Body = void, Params = void>(url: string, body?: Body, params?: Params): Promise<Response> {
        return HttpService._makeRequest(() => apiInstance.put(url, body, { params }));
    }

    static delete<Response, Params = void>(url: string, params?: Params): Promise<Response> {
        return HttpService._makeRequest(() => apiInstance.delete(url, { params }));
    }

    private static async _makeRequest(callback: () => Promise<AxiosResponse>): Promise<AxiosResponse['data']> {
        try {
            const response = await callback();

            return response.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                // eslint-disable-next-line no-console
                console.log(e.response?.data.message);
            } else if (e instanceof Error) {
                // eslint-disable-next-line no-console
                console.log(e.message);
            }

            throw e;
        }
    }
}
