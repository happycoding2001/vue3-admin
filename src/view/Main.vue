<template>
<div class="common-layout">
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>
                <CommonHeader></CommonHeader>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

  
<script>
import {defineComponent} from 'vue'
import CommonHeader from '../components/CommonHeader.vue'
export default defineComponent({ 	
    components:{CommonHeader} ,
}) 	
</script>
