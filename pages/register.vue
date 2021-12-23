<template>
    <div class="m-register">
        <!--头部-->
        <div class="m-form">
            <article class="header">
                <span class="head-type">注册</span>
            </article>
            <section>
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    class="demo-ruleForm"
                    label-width="85px"
                >
                    <el-form-item label="昵称" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email" />
                    </el-form-item>

                    <el-form-item label="密码" prop="pwd">
                        <el-input v-model="ruleForm.pwd" type="password" />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="cpwd">
                        <el-input v-model="ruleForm.cpwd" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            type="primary"
                            @click="register"
                            style="background:#b89485"
                        >同意以下协议并注册</el-button>
                        <div class="error">{{ error }}</div>
                        <p>
                            <nuxt-link to="/helpCenter?el=隐私条款&til=服务声明">隐私条款</nuxt-link>&nbsp;
                            <nuxt-link to="/login">已有账号？点此登录</nuxt-link>
                        </p>
                    </el-form-item>
                </el-form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import CryptoJS from 'crypto-js'
const router = useRouter()
const error = ref('')
const ruleForm = reactive({
    name: "",
    pwd: "",
    cpwd: "",
    email: ""
})
const ruleFormRef = ref()
const rules = reactive({
    name: [
        {
            required: true,
            type: "string",
            message: "请输入昵称",
            trigger: 'blur'
        }
    ],
    email: [
        {
            required: true,
            type: "email",
            message: "请输入邮箱",
            //失去焦点时校验
            trigger: "blur"
        }
    ],
    pwd: [
        {
            required: true,
            message: "请输入密码",
            trigger: "blur"
        },
        {
            //正则校验
            pattern: /\w{6,}/,
            message: "密码长度需6位以上"
        }
    ],
    cpwd: [
        {
            required: true,
            message: "请再次输入密码",
            trigger: "blur"
        },
        {
            // 自定义规则
            validator: (rule, value, callback) => {
                if (value !== ruleForm.pwd) {
                    callback(new Error("两次输入密码不一致"));
                } else {
                    callback();
                }
            },
            trigger: "blur"
        }
    ]
})

const register = () => {
    ruleFormRef.value.validate(async (valid) => {
        if (valid) {
            console.log('提交请求', ruleForm);
            const { data } = await useFetch(`/api/users/signup`, {
                method: 'post',
                body: {
                    // encodeURIComponent: 对中文进行编码
                    username: window.encodeURIComponent(ruleForm.name),
                    // CryptoJS.MD5 加密
                    password: CryptoJS.MD5(ruleForm.pwd).toString(),
                    email: ruleForm.email
                }
            })
            if (data.value.code == 0) {
                router.push({ path: '/login' })
            } else {
                error.value = data.value.msg
            }
            setTimeout(() => {
                error.value = ''
            }, 1500)
        }
    });
}
</script>

<script >
export default {
    layout: 'blank'
}
</script>

<style lang="scss" src="@/assets/css/login/login.scss"></style>