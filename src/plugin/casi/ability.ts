
import { defineAbility } from '@casl/ability';
import { canDo, cannotDo } from './useAbiiity';
import { AbilityOne } from '../../conf/types/abiliType';

export default defineAbility((can, cannot) => {
    canDo.map((one: AbilityOne) => { can(one.action, one.subject) })
    cannotDo.map((one: AbilityOne) => { cannot(one.action, one.subject) })
})