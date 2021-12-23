<template>
    <div class="m-register">
        <!--头部-->
        <div class="m-form">
            <article class="header">
                <span class="head-type">登录</span>
            </article>
            <section>
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    class="demo-ruleForm"
                    label-width="85px"
                >
                    <el-form-item label="昵称" prop="name">
                        <el-input v-model="username" />
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="email" />
                    </el-form-item>
                    <el-form-item label="密码" prop="pwd">
                        <el-input v-model="password" type="password" />
                    </el-form-item>
                    <el-form-item>
                        <div class="login-btn">
                            <el-button type="primary" @click="login" style="background:#b89485">登录</el-button>
                            <div class="error">{{ error }}</div>
                            <p>
                                <nuxt-link to="/register">还未创建账号？点此注册</nuxt-link>
                            </p>
                        </div>
                    </el-form-item>
                </el-form>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CryptoJS from 'crypto-js'
import { useRouter } from 'vue-router'

const { user } = useUser()
const router = useRouter()
const error = ref('')
const username = ref('')
const password = ref('')
const email = ref('')
const checked = ref('')

const login = async () => {
    const { data } = await useFetch(`/api/users/userlogin`, {
        method: 'post',
        body: {
            // encodeURIComponent: 对中文进行编码
            username: window.encodeURIComponent(username.value),
            // CryptoJS.MD5 加密
            password: CryptoJS.MD5(password.value).toString(),
        }
    })
    if (data.value.code == 0) {
        //登录成功之后，获取当前用户信息
        const { data } = await useFetch('/api/users/getuser')
        // console.log(data.value, "loginbacksmg")
        user.value = data.value
        console.log(user.value.name,"user")
        router.push('/')
    } else {
        error.value = data.value.msg
    }
}

</script>

<script >
export default {
    layout: 'blank'
}
</script>

<style lang="scss" src="@/assets/css/login/login.scss"></style>
