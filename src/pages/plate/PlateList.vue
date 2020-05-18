<template>
    <div class="el-plate-list">
        <el-button type="primary" @click="msgBtn">{{msg}}</el-button>
        <el-card shadow="always">{{test}}</el-card>
        <button @click="tsHandler(test)">ts测试</button>
        <p>{{task}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            msg: "typescript",
            test: "ts测试",
            task: "变化后的ts",
        }
    },
    created() {
        console.log('created',this.msg)
    },
    mounted() {
        console.log('mounted')
    },
    methods: {
        msgBtn(ev:any){
            this.msg = "点击了typescript"
            console.log('点击事件',ev)
        },
        tsHandler(test: string) {
            this.task = test;
            //boolean
            let isDone: boolean = false;
            console.log(isDone);
            //number
            let decLiteral: number = 6;
            let hexLiteral: number = 0xf00d;
            console.log(decLiteral);
            console.log(hexLiteral);
            //string
            let name: string = "bob";
            name = "switch";
            console.log(name);
            //使用(``)和${}
            let nameTwo: string = "Gene";
            let age: number = 26;
            // let sentence: string = `Hello, my name is ${ nameTwo }. I'll be ${ age + 1 } years old`;
            let sentence: string = "Hello, my name is" + nameTwo + ".\n\n" + "I'll be" + (age + 1) + "years old";
            console.log(sentence);
            //数组
            let list: number[] = [1, 2, 3];
            console.log(list);
            let listTwo: Array<number> = [4, 5, 6];
            console.log(listTwo);
            //元组
            let tuple: [string, number];
            tuple = ['hello', 10];
            console.log(tuple);
            //枚举 
            enum Color { Black, Green, Red }
            let c: Color = Color.Green;
            console.log(c);
            // enum Color { Red = 1, Green = 3, Blue = 5 }
            let colorName: string = Color[1];
            // let a: Color = Color.Blue;
            // console.log(a);
            console.log(colorName);
            //Any 任意类型可以转换 类型的变量只是允许你给它赋任意值, 也可以调取上面的任意方法
            let notSure: any = 4;
            notSure = "maybe a string instead";
            console.log(notSure);
            notSure = false;
            console.log(notSure);
            let listThree: Array<any> = [1, true, "free"];
            // let listThree: any[] = [1, true, "free"];
            listThree[1] = 100;
            console.log(listThree);
            //Object类型的变量只是允许你给它赋任意值, 但是不能调取上面的任意方法
            let prettySure: Object = 4;
            console.log(prettySure);
            //void  只能赋予undefined和null
            let unusable: void = undefined;
            console.log(unusable);
        },
        //当一个函数没有返回值时，你通常会见到其返回值类型是 void
        warnUser(): void {
            console.log("This is my warning message");
        }
    }
}) 
</script>
<style scoped lang="less">
@import '~@/common/css/plate/plateList.less';
</style>