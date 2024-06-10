<template>
    <el-button plain @click="changeList(dialogSetObject.clickobj.clickHandle)">
        {{ dialogSetObject.clickobj.title }}
    </el-button>

    <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button v-for="(item, index) in dialogSetObject.btnArr" :key="index"
                    :type="item.type === 1 ? 'primary' : ''" @click="closeDialog(item.click)"> {{ item.name }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue'
import { ElMessageBox } from 'element-plus'
type DialogObj = {
    btnArr: Array<{
        name: string;
        type: number;
        click: Function;
    }>;
    clickobj: {
        title: string;
        clickHandle: Function;
    };
    closeObj?: {
        isCloseHandle?: boolean;
    };
}

// 如果需要设置初始值，可以使用withDefaults

// const props = defineProps({
//     // 设置初始值 
//     btnArr: {
//         type: Array,
//         default: () => {}
//     },
//     clickobj: {
//         type: Object,
//         default: () => {}
//     },
//     closeObj: {
//         type: Object,
//         default: () => {}
//     }
// });


// const props = withDefaults(defineProps<DialogObj>(), {
//     // 设置初始值 
//     btnArr: () => [{
//         name: '取消',
//         type: 0,
//         click: () => {}
//     }],
//     clickobj: () => ({
//         title: '提示',
//         clickHandle: () => {}
//     }),
//     closeObj: () => ({
//         isCloseHandle: false
//     })
// });

const props = defineProps({
    // 可以给props设置默认属性
    dialogObj: {
        type: Object,
        default: () => {}
    }
});

console.log('props： ', props);
// 全部dialog组件的设置信息
const dialogSetObject = reactive(props.dialogObj)
console.log('dialogSetObject： ', dialogSetObject);
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
    console.log('dialogSetObject： ', dialogSetObject);
    func ? func() : () => { };
    dialogVisible.value = true;
}
// 关闭dialog
const closeDialog = (func: any) => {
    console.log('dialogSetObject： ', dialogSetObject);
    func && func();
    // if (props.closeObj.isCloseHandle) {
    //     console.log('关闭dialog isCloseHandle钩子');
    // }
    dialogVisible.value = false
}

// 向父组件传值
const emit = defineEmits(['closeHandle'])
// 向父组件传递值
// const dialogEmit = () => {
//     emit('closeHandle', 'dioalog')
// }
</script>

<style scoped></style>