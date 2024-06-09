<template>
    <el-button plain @click="changeList(dialogSetObject.clickobj.clickHandle)">
        {{ dialogSetObject.clickobj.title }}
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button 
                v-for="(item, index) in dialogSetObject.btnArr" 
                :key="index"
                :type="item.type === 1 ? 'primary' : ''" 
                @click="closeDialog(item.click)"> {{ item.name }} </el-button>
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

// 如果需要设置初始值，可以使用withDefaults
const props = defineProps({
    // 可以给props设置默认属性
    dialogObj: {
        type: Object,
        default: () => {}
    }
});

// 全部dialog组件的设置信息
const dialogSetObject = reactive(props.dialogObj)
// dialog的显示与隐藏
const dialogVisible = ref(false)


// dialog关闭钩子
const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
// 点击diplog
const changeList = (func?: any) => {
    console.log('func： ', func);
    func ? func() : () => {};
    dialogVisible.value = true;
}
// 关闭dialog
const closeDialog = (func: any) => {
    func && func();
    dialogVisible.value = false
}
</script>

<style scoped></style>