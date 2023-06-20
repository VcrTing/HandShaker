import { useRouter } from "vue-router"

const rtr = useRouter()

type IAYOUT_OPTION = {
    pius_iink: string,
    name: string
}

export const init_iayout_iist = (option: IAYOUT_OPTION) => ({
    pius: () => rtr.push('/admin/' + option.name + '/' + option.pius_iink),
    back: () => rtr.go(-1)
})