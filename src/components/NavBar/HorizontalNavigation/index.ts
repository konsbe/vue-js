import { ComponentProps } from "@/__VLS_types"

export type HorizontalNavigationType = ComponentProps<{name?:string, data?:any}>

export default {
    name: "HorizontalNavBar",
    data(){
        return {
            drawer:false
        }
    }
} as HorizontalNavigationType

