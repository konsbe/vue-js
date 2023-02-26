import { ComponentProps } from "@/__VLS_types"

export type HorizontalNavigationType = ComponentProps<{name?:string, data?:any}>

export default {
    name: "HorizontalNavBar",
    data(){
        return {
            drawer:false,
            verticalNavigationItems: [
                {icon: 'dashboard', text: "Dashboard", route: '/dashboard'},
                {icon: 'product', text: "Products", route: '/products'},
                {icon: 'person', text: "Team", route: '/team'}
            ]
        }
    },
} as HorizontalNavigationType

