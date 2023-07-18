<template>
<div class="common-layout">
    <el-container>
        <CommonAside></CommonAside>
        <el-container>
           
                <CommonHeader></CommonHeader>
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
import CommonAside from '../components/CommonAside.vue'
export default defineComponent({ 	
    components:{CommonHeader,CommonAside} ,
}) 	
</script>
