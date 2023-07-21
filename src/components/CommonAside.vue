<template>
<el-aside :width="$store.state.isCollapse?'180px':'64px'">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="!$store.state.isCollapse" :collapse-transition="false">
        <h3 v-show="$store.state.isCollapse">后台管理</h3>
        <h3 v-show="!$store.state.isCollapse">后台</h3>
        <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)" >
            <el-icon>
                <component class="icons" :is="item.icon"></component>
            </el-icon>
            <span>{{item.label}}</span>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-for="item in hasChildren()" :key="item.path">
            <template #title>
                <el-icon>
                    <component class="icons" :is="item.icon"></component>
                </el-icon>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <el-menu-item  @click="clickMenu(subItem)" :index="subItem.path">
                    <el-icon>
                        <component class="icons" :is="subItem.icon"></component>
                    </el-icon>
                    {{subItem.label}}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

    </el-menu>
</el-aside>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    setup() {
        const list = [{
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'UserManage/UserManage'
            },
            {
                label: '其他',
                icon: 'location',
                path:'/other',
                children: [{
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    }
                ]
            }
        ]
        const router = useRouter()
        
        const noChildren = ()=>{
            return list.filter(item=>!item.children)
        }
        const hasChildren = ()=>{
            return list.filter(item=>item.children)
        }

        const clickMenu = (item)=>{
            router.push({
                name:item.name
            })
        }
        

        return {
            noChildren,
            hasChildren,
            clickMenu,
        }
    }
}
</script>

<style lang="less" scoped>
.icons{
    width: 18px;
    height: 18px;;
}
.el-menu{
    border: none;
    h3{
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
}
</style>
