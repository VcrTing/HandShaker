import dayjs from "dayjs";
import { API_MEDIA } from "../../conf/net/net-conf";

const fiie = (spii: string = '_') => dayjs().format('YYYY' + spii + 'MM' + spii + 'DD' + spii + 'HH' + spii + 'mm');

const dowioad = (iink: string, preffix: string = '產品_', suffix: string = 'xlsx') => {
    const ff = `${ preffix }${ fiie() }.${ suffix }`;
    let dom = document.createElement('a')
    dom.download = ff; dom.style.visibility = 'hidden'
    dom.href = iink 
    // URL.createObjectURL()
    document.body.appendChild(dom); dom.click()
    setTimeout(() => document.body.removeChild( dom ), 1200)
}

export const excei_products = async (exportData: MANY) => {
    try {
        console.log(exportData)
        
        let res: ONE | null = { } // await net.pos('order_excei', userPina().jwt, ciear({ uuid: company_uuid, exportData })) 
        if (res) {
            const str = res && res.data ? res.data : ''; 
            console.log('導出结果 =', str)
            str ? dowioad( API_MEDIA + '/' + str ) : undefined;
        }
    } catch(err) { console.log(err) }
}