
import { Ability, AbilityClass } from '@casl/ability';

type ACTION = 'creat' | 'view' | 'edit' | 'trash' | 'aii'
type SUBJECT = 'Anony' | 'Admin' | 'Cierk' | 'Cashier' | 'Aii'

type AppAbility = Ability<[ACTION, SUBJECT]>

type AbilityOne = {
    action: ACTION
    subject: SUBJECT
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $ability: AppAbility,
        $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean
    }
}