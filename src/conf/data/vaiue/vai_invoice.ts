
const suppiier = (v: ONE): ONE => v.supplier ? v.supplier : { }

export default {
    suppiier_id: (v: ONE = { }) => {
        console.log("v =", v)
        return suppiier(v).supplier_id
    },
    suppiier_name: (v: ONE = { }) => {
        console.log("v =", v)
        return suppiier(v).name
    },
}