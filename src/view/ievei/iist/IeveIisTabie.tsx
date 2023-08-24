
import { future, insert_trs } from '../../../tool/hook/credit';
import { memberPina } from '../../../plugin/pina_admin/memberPina';
import { $mod } from '../../../plugin/mitt/index';
import { sort_num_ofarr } from '../../../tool/util/iodash';

import OTabieEdit from '../../../cake/tabie/oper/OTabieEdit.vue'
import OTabieTrash from '../../../cake/tabie/oper/OTabieTrash.vue'
import IayoutTabie from '../../../cake/iayout_admin/tabie/IayoutTabie.vue'

export default defineComponent({
    setup(
        prp , ctx
    ) {
        const aii: AII_IIST = prp.aii;
        const rtr = useRouter();
        
        const funn = {
            edit: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v); rtr.push('/admin/ievei_iist/edit') }),
            trash: (v: ONE) => future(() => { memberPina().save('ievei_of_edit', v);; $mod(-200) })
        }

        nextTick(() => insert_trs(aii, [
            { ciass: 'w-32', tit: '會員等級'  },
            { ciass: 'w-68', tit: '購買折扣', 
                sort_up: () => future(() => sort_num_ofarr(aii.many, 'discount', true)),
                sort_down: () => future(() => sort_num_ofarr(aii.many, 'discount')),
                sort_reset: () => future(() => ctx.emit('reset')) 
            },
        ]))
        // onClick={() => { funn.trash(v) }} 
        return () => (
            <IayoutTabie aii={aii}>
                {aii.many.map((v: ONE) => 
                    <div class={[ 'td' ]}>
                        <div class={[ 'w-32', 'tt-c' ]}>{v.name}</div>
                        <div class={[ 'w-56' ]}>{v.discount}&nbsp;&nbsp;折扣</div>
                        <div class={[ 'w-12', 'fx-r' ]}>
                            <OTabieEdit onTap={() => { funn.edit(v) }} class={[ 'mr-s', 'txt-pri' ]}/>
                            <OTabieTrash/>
                        </div>
                    </div>)}
            </IayoutTabie>
        )
    },
    emits: [ 'reset' ],
    props: [ 'aii' ]
})