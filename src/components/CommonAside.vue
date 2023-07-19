<template>
<el-aside width="200px">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="false">
        <el-menu-item :index="item.path" v-for="item in noChildren()" :key="item.path" >
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
                <el-menu-item :index="subItem.path">
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
        
        const noChildren = ()=>{
            return list.filter(item=>!item.children)
        }
        const hasChildren = ()=>{
            return list.filter(item=>item.children)
        }

        return {
            noChildren,
            hasChildren,
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
}
</style>
