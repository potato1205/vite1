<template>
    <div class="">
        <div>
            <select
            @change="selectOptionChange($event.target || {})"
            name="" id="">
                <option
                v-for="(item, index) in selectOptions"
                :key="index"
                :value="item.index"
                >{{ item.label }}</option>
            </select>
        </div>
        <el-transfer v-model="value" :data="data" />
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface Option {
    key: number
    label: string
    disabled: boolean
}

interface selectOption {
    index: String
    value: number
    label: string
}

const selectOptionChange = (target: Object) => {
    console.log((target as { value: string }).value || '')
}

const selectOptions = ref<selectOption[]>([
    {
        index: '1',
        value: 1,
        label: 'Option 1'
    },
    {
        index: '2',
        value: 2,
        label: 'Option 2'
    },
    {
        index: '3',
        value: 3,
        label: 'Option 3'
    },
    {
        index: '4',
        value: 4,
        label: 'Option 4'
    }
]);

const generateData = () => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
        data.push({
            key: i,
            label: `Transfer Option ${i}`,
            disabled: false,
        })
    }
    return data
}

const data = generateData()
const value = ref([])

</script>

<style scoped></style>