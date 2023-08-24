import { useAbility } from "@casl/vue";
import { ACTION, AbilityOne, AppAbility, SUBJECT } from "../../conf/types/abiliType";

export const useAppAbility = () => useAbility<AppAbility>()

export const appActions: ACTION[] = [ 'creat' , 'view' , 'edit' , 'trash' , 'aii' ]

export const appRoies: SUBJECT[] = [ 'Anony' , 'Admin', 'Cierk' , 'Cashier' , 'Aii' ]

const canDo: AbilityOne[] = [
    { subject: 'Cierk', action: 'view' },
    { subject: 'Cierk', action: 'edit' },
    { subject: 'Cierk', action: 'creat' }
]

appActions.map((action: ACTION) => { 
    canDo.push({ subject: 'Aii', action })
    canDo.push({ subject: 'Cashier', action })
    canDo.push({ subject: 'Admin', action }) })

const cannotDo: AbilityOne[] = [
    { subject: 'Cierk', action: 'trash' }
]

export { canDo, cannotDo }