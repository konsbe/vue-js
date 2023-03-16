import { ComponentProps } from "@/__VLS_types"
import PopUp from "@/components/PopUp/index.vue"
export type HorizontalNavigationType = ComponentProps<{name?:string, data?:any}>

export default {
    name: "HorizontalNavBar",
    components: { PopUp },
    data(){
        return {
            drawer:false,
            verticalNavigationItems: [
                {icon: 'dashboard', title: "Dashboard", subTitle: "Dashboard", route: '/dashboard'},
                {icon: 'list', title: "Products", subTitle: "Products", route: '/products'},
                {icon: 'person', title: "Team", subTitle: "Team", route: '/team'}
            ]
        }
    },
} as HorizontalNavigationType

