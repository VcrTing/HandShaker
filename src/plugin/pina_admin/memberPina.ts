import { defineStore } from 'pinia'

export const memberPina = defineStore("memberPina", {
    state: () => ({
        member_of_edit: <ONE>{ }
    }),
    actions: {
        save_member_of_edit(v = <ONE>{ }) { this.member_of_edit = v; }
    }
});