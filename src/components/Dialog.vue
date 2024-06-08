<template>
    <el-button plain @click="changeList">
        修改diplog
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button 
                v-for="(item, index) in dialogSetObject.btnArr" 
                :key="index"
                :type="item.type === 1 ? 'primary' : ''" 
                @click="dialogVisible = false"> {{ item.name }} </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue'
import { ElMessageBox } from 'element-plus'
// interface BtnItem {
//     name: string;
//     type: number;
//     click: () => void;
// }
console.log('defineProps:');
const props = defineProps({
    dialogObj: {}
});

const dialogSetObject = reactive(props.dialogObj)

console.log('dialogSetObject: ', dialogSetObject);

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

// 点击diplog调用的函数
const changeList = () => {
    console.log('dialogSetObject: ', dialogSetObject);
    dialogVisible.value = true
}
</script>

<style scoped></style>