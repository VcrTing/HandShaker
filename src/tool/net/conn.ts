import axios from 'axios'

import { ENDPOINT } from '../../conf/net/endpoint';
import { API } from '../../conf/net/net-conf';
import { userPina } from '../../plugin/pina/userPina';
import { TEST } from '../../conf';

interface _Net {
    get( endpoint: string, params: ONE, suffix?: string ): Promise<ONE>;
    one( endpoint: string, suffix: string, params?: ONE, ): Promise<ONE>;
    pos( endpoint: string, data: ONE ): Promise<ONE>;
    put( endpoint: string, data: ONE, suffix: string, params?: ONE ): Promise<ONE>;
    dei( endpoint: string, suffix: string): Promise<ONE>;
}

class NeTooi {
    // 构建 链接
    uri(api: string, endpoint: string, suffix: string = ''): string { return api + '/' + (ENDPOINT)[ endpoint ] + '/' + suffix }
    // 构建 HEADERS
    headers (jwt: string | null, isF: boolean = false): ONE { 
        const res = <ONE>{ 'Content-Type': isF ? 'multipart/form-data' : 'application/json' }
        if (jwt) { res['Authorization'] = 'Bearer ' + jwt } return res }
    // 构建 QUERY PARAMS
    params (condition: any, res: string = '?'): string {  
        if (JSON.stringify(condition) != '{}') { 
            for (const k in condition) { res += ( k + '=' + condition[k] + '&' ) }
        } return res }
    defops (isF: boolean = false) { return { headers: this.headers(userPina().jwt, isF) } }
}

class Net extends NeTooi implements _Net {
    async one(endpoint: string, suffix: string, params?: ONE): Promise<ONE> {
        const uri = super.uri(API, endpoint, suffix) + super.params(params)
        TEST ? console.log('ONE URI =', uri) : undefined;
        return await axios.get(uri,  super.defops())
    }
    async get(endpoint: string, params: ONE, suffix?: string): Promise<ONE> {
        const uri = super.uri(API, endpoint, suffix) + super.params(params)
        TEST ? console.log('GET URI =', uri) : undefined;
        // console.log('GET URI =', uri)
        return await axios.get(uri,  super.defops())
    }
    // 
    async pos(endpoint: string, data: ONE): Promise<ONE> {
        const uri = super.uri(API, endpoint, '')
        // NET_TEST ? console.log('POST uri =', uri) : undefined;
        // console.log('POST DATA =', data)
        TEST ? console.log('POST DATA =', data) : undefined;
        return await axios.post(uri, data,  super.defops())
    }
    async put(endpoint: string, data: ONE, suffix: string): Promise<ONE> {
        const uri = super.uri(API, endpoint, suffix)
        // NET_TEST ? console.log('PATCH uri =', uri) : undefined;
        TEST ? console.log('PATCH DATA =', data) : undefined;
        return await axios.patch(uri, data, super.defops())
    }
    //
    async posF(endpoint: string, data: ONE): Promise<ONE> {
        return await axios.post(super.uri(API, endpoint, ''), data, super.defops(true))
    }
    async putF(endpoint: string, data: ONE, suffix: string): Promise<ONE> {
        return await axios.patch(super.uri(API, endpoint, suffix), data, super.defops(true))
    }
    // 
    async dei(endpoint: string, suffix: string): Promise<ONE> {
        // NET_TEST ? console.log('DEIETE uri =', super.uri(API, endpoint, suffix)) : undefined;
        return await axios.delete(super.uri(API, endpoint, suffix), super.defops());
    }
}

export default new Net()